/**
 * Job Filtering Module using GSAP V3
 * Filters job listings based on category filters
 * @module JobFilter
 */
const JobFilter = (function() {
    // Private module variables
    let filterButtons;
    let jobListings;
    let activeFilter = null;
    
    /**
     * Initialize the filter module
     * @param {Object} config - Configuration options
     * @param {string} [config.filterButtonsSelector='.jobsfilter a'] - Selector for filter buttons
     * @param {string} [config.jobListingsSelector='.jobslist a'] - Selector for job listings
     * @param {number} [config.animationDuration=0.3] - Duration for animations
     * @param {number} [config.staggerDelay=0.05] - Delay between staggered animations
     */
    function init(config = {}) {
      // Default config
      const settings = {
        filterButtonsSelector: '.jobsfilter a',
        jobListingsSelector: '.jobslist a',
        animationDuration: 0.15,
        staggerDelay: 0.025,
        // easing
        ease: 'power2.inOut',        
      };
      
      // Initialize GSAP
      if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        gsap.registerPlugin(CSSPlugin);
      }
      
      // Select DOM elements
      filterButtons = document.querySelectorAll(settings.filterButtonsSelector);
      jobListings = document.querySelectorAll(settings.jobListingsSelector);

      // guard against missing elements
      if (filterButtons.length === 0 || jobListings.length === 0) {
        console.warn('JobFilter: No filter buttons or job listings found.');
        return;
      }
      
      // Initialize - show all jobs initially
      // showAllJobs(settings);

      // activate first filter button
      const firstButtonValue = filterButtons[0].getAttribute('data-filter');
      setActiveFilter(firstButtonValue);
      filterJobs(firstButtonValue, settings);

      
      
      // Add click event listeners to filter buttons
      filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          e.preventDefault();
          
          const filterValue = this.getAttribute('data-filter');
          
          // If clicking on the active filter, reset to "all"
          if (activeFilter === filterValue) {
            resetFilter(settings);
            return;
          }
          
          // Set new active filter
          setActiveFilter(filterValue);
          filterJobs(filterValue, settings);
        });
      });
    }
    
    /**
     * Set the active filter button
     * @param {string} filterValue - Value of the filter to set active
     * @private
     */
    function setActiveFilter(filterValue) {
      // Remove active class from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = '';
        btn.style.color = '';
      });
      
      // Add active class to current button
      const activeButton = document.querySelector(`.jobsfilter a[data-filter="${filterValue}"]`);
      if (activeButton) {
        activeButton.classList.add('active');
      }
      
      // Store active filter value
      activeFilter = filterValue;
    }
    
    /**
     * Reset filter to show all jobs
     * @param {Object} settings - Animation settings
     * @private
     */
    function resetFilter(settings) {
      // Reset active filter
      activeFilter = null;
      
      // Reset button styles
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = '';
        btn.style.color = '';
      });
      
      // Show all jobs
      showAllJobs(settings);
    }
    
    /**
     * Filter jobs based on category
     * @param {string} filterValue - Category value to filter by
     * @param {Object} settings - Animation settings
     * @private
     */
    function filterJobs(filterValue, settings) {
      // Hide all jobs first with GSAP
      const hideTimeline = gsap.timeline();
      
      hideTimeline.to(jobListings, {
        duration: settings.animationDuration,
        opacity: 0,
        scale: 0.95,
        stagger: settings.staggerDelay,
        onComplete: () => {
          // Hide all jobs initially
          jobListings.forEach(job => {
            job.style.display = 'none';
          });
          
          // Show only jobs matching the filter
          const filteredJobs = document.querySelectorAll(`.jobslist a[data-categories="${filterValue}"]`);
          
          // Create show animation timeline
          const showTimeline = gsap.timeline();
          
          // Set filtered jobs to display flex to make them visible
          filteredJobs.forEach(job => {
            job.style.display = 'flex';
          });
          
          // Animate filtered jobs in
          showTimeline.fromTo(
            filteredJobs, 
            {
              opacity: 0,
              scale: 0.95
            },
            {
              duration: settings.animationDuration,
              opacity: 1,
              scale: 1,
              stagger: settings.staggerDelay
            }
          );
        }
      });
    }
    
    /**
     * Show all jobs
     * @param {Object} settings - Animation settings
     * @private
     */
    function showAllJobs(settings) {
      // Hide all jobs first
      jobListings.forEach(job => {
        job.style.opacity = 0;
        job.style.display = 'flex';
      });
      
      // Animate all jobs in
      gsap.fromTo(
        jobListings,
        {
          opacity: 0,
          scale: 0.95
        },
        {
          duration: settings.animationDuration,
          opacity: 1,
          scale: 1,
          stagger: settings.staggerDelay
        }
      );
    }
    
    // Public API
    return {
      init
    };
  })();
  
  // Export as module for modern JS environments
  export default JobFilter;
  
  // Usage example (can be removed in production):
  /*
  // Import in another file
  import JobFilter from './job-filter.js';
  
  // Initialize with default settings
  document.addEventListener('DOMContentLoaded', function() {
    JobFilter.init();
    
    // Or with custom settings
    // JobFilter.init({
    //   animationDuration: 0.5,
    //   staggerDelay: 0.03
    // });
  });
  */
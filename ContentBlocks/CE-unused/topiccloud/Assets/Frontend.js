/* Created by Content Blocks */


document.addEventListener('DOMContentLoaded', function() {

    console.log('TopicCloud: lets got!')


    const clouds = document.querySelectorAll('.ce-topiccloud')
    
    
    clouds.forEach(function(cloud) {


        // const boxes = gsap.utils.toArray('.topic')
        const boxes = cloud.querySelectorAll('.topic')       
        const overlay = cloud.querySelector('.overlay')            
        const easing = 'power1.inOut'


        // Hover-Effect
        boxes.forEach(function(box) {
            let img = box.querySelector('img')
            let topicname = box.querySelector('.topicname')
            let textcolor = topicname.style.color


            //  filter: brightness(151%) contrast(190%) saturate(0%);
            box.addEventListener('mouseenter', function() {
                gsap.to(img, {filter: 'grayscale(100%) brightness(300%) contrast(150%)', duration: 0.25})
                gsap.to(topicname, {color: 'white', duration: 0.5})
            })

            box.addEventListener('mouseleave', function() {
                gsap.to(img, {filter: 'grayscale(0%) brightness(100%) contrast(100%)', duration: 0.25})
                gsap.to(topicname, {color: textcolor, duration: 0.5})
            })                
        })



        const settingsFrom = [
            {x: -250,  opacity: 0, duration: 1, ease: easing},
            {x: -250,  opacity: 0, duration: 1, ease: easing},
            {x: -250,  opacity: 0, duration: 1, ease: easing},
            {x: -250,  opacity: 0, duration: 1, ease: easing},
            {x:  250,  opacity: 0, duration: 1, ease: easing},
            {x:  250,  opacity: 0, duration: 1, ease: easing},
            {x:  250,  opacity: 0, duration: 1, ease: easing},
            {x:  250,  opacity: 0, duration: 1, ease: easing},
            {x:  250,  opacity: 0, duration: 1, ease: easing},
            {x:  250,  opacity: 0, duration: 1, ease: easing},
            {x:  250,  opacity: 0, duration: 1, ease: easing},
        ]

        // create timeline, spread out the boxes


        
        
        
        function setupScrollTrigger() {
            // Remove the existing trigger to prevent duplication
            let existingTrigger = ScrollTrigger.getById("theTopicCloudTrigger");
            if (existingTrigger) existingTrigger.kill();
        
            if (window.innerWidth >= 769) {

                // clearProps all boxes and overlay
                gsap.set(boxes, {clearProps: 'all'})
                gsap.set(overlay, {clearProps: 'all'})


                const topicsTimelineDesktop = gsap.timeline()
        
                topicsTimelineDesktop.to(overlay, {opacity: 0.15, scale: 0.6, filter: 'blur(10px)', duration: 2, ease: easing}, 0)
                
                // boxes
                topicsTimelineDesktop.from(boxes[0], settingsFrom[0], 2)
                topicsTimelineDesktop.from(boxes[1], settingsFrom[1], 1.4)
                topicsTimelineDesktop.from(boxes[2], settingsFrom[2], 1)
                topicsTimelineDesktop.from(boxes[3], settingsFrom[3], 0.5)
                topicsTimelineDesktop.from(boxes[4], settingsFrom[4], 0)
                topicsTimelineDesktop.from(boxes[5], settingsFrom[5], 0.5)
                topicsTimelineDesktop.from(boxes[6], settingsFrom[6], 1)
                topicsTimelineDesktop.from(boxes[7], settingsFrom[7], 1.5)
                topicsTimelineDesktop.from(boxes[8], settingsFrom[8], 2)
                topicsTimelineDesktop.from(boxes[9], settingsFrom[9], 2.5)
                topicsTimelineDesktop.from(boxes[10], settingsFrom[10], 3)


                // Apply Desktop Animation
                ScrollTrigger.create({
                    id: "theTopicCloudTrigger",
                    trigger: '#theTopicCloud',
                    start: 'top top',
                    end: 'bottom top',
                    animation: topicsTimelineDesktop,
                    scrub: 1,
                    pin: true,                
                    anticipatePin: 1,
                    markers: false,
                    pinSpacing: true
                });
            } else {
                // clearProps all boxes and overlay
                gsap.set(boxes, {clearProps: 'all'})
                gsap.set(overlay, {clearProps: 'all'})

                const topicsTimelineMobile = gsap.timeline()

                topicsTimelineMobile.to(overlay, {opacity: 0.15, scale: 0.6, filter: 'blur(10px)', duration: 2, ease: easing}, 0)

                // boxes: just fade in and move up for each box
                boxes.forEach(function(box, index) {
                    topicsTimelineMobile.fromTo(box, {y: 100, opacity: 0, duration: 1, ease: easing}, {y: 0, opacity: 1, duration: 1, ease: easing}, index * 0.5)
                })

                // Apply Mobile Animation
                ScrollTrigger.create({
                    id: "theTopicCloudTrigger",
                    trigger: '#theTopicCloud',
                    start: 'top 80%',
                    end: 'bottom 60%',
                    animation: topicsTimelineMobile, // Use a different animation
                    markers: false,
                    scrub: 1,                   
                });
            }
        }



        


        window.addEventListener("resize", setupScrollTrigger);
        setupScrollTrigger(); // Initial setup
        
    
        // refresh ScrollTrigger
        //ScrollTrigger.refresh()
    })
}) 

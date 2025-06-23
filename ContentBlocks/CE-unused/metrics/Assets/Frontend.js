/* Created by Content Blocks */

document.addEventListener("DOMContentLoaded", function metrics() {


    gsap.registerEffect({
        name: "counter",
        extendTimeline: true,
        defaults: {
            end: 0,
            duration: 5,
            ease: "none",
            increment: 1,
        },
        effect: (targets, config) => {
            let tl = gsap.timeline();
            // let num = targets[0].innerText.replace(/\,/g, ''); // removes comma
            let num = 0
            targets[0].innerText = num; 
            
            console.log(num);

            tl.startTime(config.delay);
            // add classname to targets add a time
            
            tl.call(() => {
                targets[0].classList.add('counting');
            }, null, 0);   

            // add filter blur to targets
            /* tl.set(targets, {
                filter: "blur(1px)",                
            }, 0);   */

            tl.to(targets, {
                duration: config.duration,
                innerText: config.end,
                modifiers: {
                    innerText: function(innerText) {
                        return gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                },
                ease: config.ease
            }, 0);

            tl.call(() => {
                targets[0].classList.remove('counting');
            }, null);

            // remove filter blur from targets
            /* tl.set(targets, {
                filter: "blur(0px)",                
            }, null); */
    
            return tl;
        }
    });


    // register Scrolltrigger-Plugin
    gsap.registerPlugin(ScrollTrigger);

    console.groupCollapsed('Content Block: metrics');
    // Add your code here
    console.log('Content Block: metrics');

    let metrics = document.querySelectorAll('.ce-metrics');
    if (metrics.length === 0) {
        return;
    }

    console.log(metrics);
    metrics.forEach(function(metric) {
        let value = metric.querySelector('.metric-value');

        //get data-value and data-time(ms)
        let dataValue = value.getAttribute('data-value');
        let dataTime = value.getAttribute('data-time');
        let dataDelay = value.getAttribute('data-delay');

        // convert data-time to seconds
        dataTime = dataTime / 1000;
        dataDelay = dataDelay / 1000;

        console.log("Time:"+dataTime);

        

        value.innerText = 0;

        //trigger animation

        gsap.to(value, {
            scrollTrigger: {
                trigger: metric,
                start: "top 80%",
                end: "bottom 80%",
                // toggleactions: onEnter, onLeave, onEnterBack, and onLeaveBack
                toggleActions: "play reset play reset",
                onEnter: function() {
                    console.log('Enter');
                    gsap.effects.counter(value, {
                        end: dataValue,
                        duration: dataTime,
                        delay: dataDelay,
                        increment: 1
                    });
                }
            }
        });




        
    });

    console.groupEnd();
});


const checkmobileTouchDevice = function () {
    // Check if the device is a mobile touch device
    return (
        // check if viewport is below 768px
        window.innerWidth < 768     
    );
};





const convertToAccordion = function () {
    console.log('convertToAccordion called');
    // find all .hoverboxsm elements
    const hoverboxes = document.querySelectorAll('.hoverboxsm-set');
    // loop through each hoverbox
    hoverboxes.forEach(function (hoverbox) {
        const hoverboxItems = hoverbox.querySelectorAll('.hoverboxsm');        // if viewport below 768px, establish accordion behavior
       
        hoverboxItems.forEach(function (item) {
                       
            const doStuff = function(item) {
                console.log('Item clicked:', item);
                // toggle the 'active' class on the clicked item
                item.classList.toggle('active');
                // close other items
                hoverboxItems.forEach(function (otherItem) {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            }
            
            item.addEventListener('click', function actionHandler() {
                doStuff(item);
            });   
            
            // add touchstart event listener for mobile devices
            item.addEventListener('touchstart', function actionHandler() {
                if (checkmobileTouchDevice()) {
                    doStuff(item);
                }
            });

        });      
            
          
       
    })
}

// run on document ready
document.addEventListener('DOMContentLoaded', function () {
    convertToAccordion();
});

// run on window resize
window.addEventListener('resize', function () {
    convertToAccordion();
});

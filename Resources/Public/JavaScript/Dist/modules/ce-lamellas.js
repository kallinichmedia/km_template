/**
 * Initializes the text slider functionality.
 * 
 * @function ceLamellas
 * @memberof module:ce-textslider
 * @returns {void}
 */
export function ceLamellas() {

    addEventListener('DOMContentLoaded', function initLamellas(){

        console.log('Lamellas: lets go!')

        let itemPreselected = 0
        // check if there is a preselected item
        if (window.PRESELECTLAMELLOS) {
            itemPreselected = window.PRESELECTLAMELLOS           
        }   

        // find all .extcontainer-lamellas
        const lamellasCEs = document.querySelectorAll('.extcontainer-lamellas')
    
        // loop through all lamellas
    
        lamellasCEs.forEach(lamellas => {
    
    
            // find all .accordion-item
            const lamellasItems = lamellas.querySelectorAll('.lamellas-item')

            // dedicated function to handle class switching
            function toggleLamellasItem(lamellasItem, lamellasItems) {
                if (lamellasItem.classList.contains('show')) {
                    lamellasItem.classList.remove('show')
                    return
                } else {
                    lamellasItems.forEach(item => {
                        item.classList.remove('show')
                    })
                    lamellasItem.classList.add('show')
                    // scroll to the item after 500ms
                    setTimeout(() => {
                        lamellasItem.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        })
                    }, 500)
                    
                }
            }
    
            // loop through all accordion items
    
            lamellasItems.forEach(lamellasItem => {
                console.log(lamellasItem)
                // find .accordion-item-header
                const lamellasItemHeader = lamellasItem.querySelector('.lamellas-item-header')
    
                // add click event to header
    
                lamellasItemHeader.addEventListener('click', () => {
                    toggleLamellasItem(lamellasItem, lamellasItems)
                })
            })  
            
            // if there is a preselected item, toggle it
            if (itemPreselected) {
                const lamellasItem = lamellas.querySelector('.lamellas-item:nth-child(' + itemPreselected + ')')
                toggleLamellasItem(lamellasItem, lamellasItems)
            }

           
            
    
                
        })
    })
}



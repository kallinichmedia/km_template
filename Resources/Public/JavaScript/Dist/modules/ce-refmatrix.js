export function ceRefMatrix() {

    document.addEventListener('DOMContentLoaded', function initRefMatrix() {
        
        
        // .extcontainer-referenzmatrix
        let refMatrix = document.querySelectorAll('.extcontainer-referenzmatrix');
        console.log(refMatrix);
        
        if (refMatrix.length === 0) { 
            console.log('No refmatrix found')
            return
        }       
        
        refMatrix.forEach(function (matrix) {
            
            let activeCats = [];

            let refItemsBox = matrix.querySelector('.km-reference-box');

            function tickFilters(filters) {
                filters.forEach(function (filter) {
                    let cat = filter.getAttribute('data-cat');
                    if (activeCats.includes(cat)) {
                        filter.classList.add('active');
                    } else {
                        filter.classList.remove('active');
                    }
                });
            }

            function filterItems(refmatrixItems) {

                // if no active cats, show all and return
                if (activeCats.length === 0) {
                    refmatrixItems.forEach(function (item) {
                        item.classList.remove('hidden');
                    });
                    return;
                }

                refmatrixItems.forEach(function (item) {
                    let cats = item.getAttribute('data-cats').split(' ');
                    let show = false;
                    cats.forEach(function (cat) {
                        if (activeCats.includes(cat)) {
                            show = true;
                        }
                    });
                    if (show) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            }

            
            let refmatrixFilters = matrix.querySelectorAll('.catfilter');
            let refmatrixItems = matrix.querySelectorAll('.km-reference');
    
            // init
            refreshLayout(refmatrixItems, refItemsBox);
             // resize event
            window.addEventListener('resize', function () {
                refreshLayout(refmatrixItems, refItemsBox);
            });


            refmatrixFilters.forEach(function (filter) {
                // get data-cat
                let cat = filter.getAttribute('data-cat');
    
                // add click event
                filter.addEventListener('click', function () {              
                    
                   /*  if (activeCats.includes(cat)) {
                        // remove cat from activeCats
                        activeCats = activeCats.filter(item => item !== cat);
                    } else {
                        // add cat to activeCats
                        activeCats.push(cat);
                    } */

                    // set this cat only as active, if already active remove it
                    if (activeCats.includes(cat)) {
                        activeCats = activeCats.filter(item => item !== cat);
                    } else {
                        activeCats = [cat];
                    }
                    

                    tickFilters(refmatrixFilters);
                    filterItems(refmatrixItems);
                    refreshLayout(refmatrixItems, refItemsBox);                   
                });                   
            }); 
        });


    
    });
}







function refreshLayout(refmatrixItems, refItemsBox) {

    const gsapState = Flip.getState(refmatrixItems);
    let items = Array.from(refmatrixItems);
    // remove all columns
    let columns = refItemsBox.querySelectorAll('.column');
    columns.forEach(function (column) {
        column.remove();
    });


    
    console.group('refreshLayout');
    console.log(gsapState);
    console.log(items);
    console.groupEnd();

    // create 3 divs .column
    
    let ViewportWidth = window.innerWidth;
    let columnsCount = 3;
    if (ViewportWidth < 768) {
        columnsCount = 1;
    } else if (ViewportWidth < 992) {
        columnsCount = 2;
    } else {
        columnsCount = 3;
    }

    // set data-columns attribute
    refItemsBox.setAttribute('data-columns', columnsCount);
    columns = [];
    for (let i = 0; i < columnsCount; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        refItemsBox.appendChild(column);
        columns.push(column);
    }

                

    // move items to columns

    let column = 0;

    refmatrixItems.forEach(function (item) {
        // if item is hidden, skip
        if (item.classList.contains('hidden')) {
            return;
        }
        columns[column].appendChild(item);
        column++;
        if (column > columnsCount-1) {
            column = 0;
        }
    });

    // refresh flip, nice and simple

    Flip.from(gsapState, {
        pause: false,
        duration: 0.25,        
        onComplete: function () {
            console.log('Flip complete');
        }
    } );
    


    
}




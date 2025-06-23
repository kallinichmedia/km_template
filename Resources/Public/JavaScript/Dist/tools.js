/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */


const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

function refresh3colLayout(items, container) {
    let items = Array.from(items);
    // remove all columns
    let columns = container.querySelectorAll('.column');
    columns.forEach(function (column) {
        column.remove();
    });

    console.group('refreshLayout');
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
    container.setAttribute('data-columns', columnsCount);
    columns = [];
    for (let i = 0; i < columnsCount; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        columns.push(column);
    }                

    // move items to columns

    let column = 0;

    items.forEach(function (item) {
        // if item is hidden, skip
        if (item.classList.contains('hidden')) {
            return;
        }
        columns[column].appendChild(item);
        column++;
        if (column > 2) {
            column = 0;
        }
    });
}

// Exporting utility functions for use in other modules.
export {preloadImages, refresh3colLayout};





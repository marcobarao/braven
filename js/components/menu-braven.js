'use strict';

(function () {
    const $menuBraven = document.querySelector('.menu-braven');
    const $menu = $menuBraven.querySelector('.menu');
    const $items = $menuBraven.querySelector('.items');

    $menu.addEventListener('click', event => {
        event.preventDefault();

        $items.classList.add('-active');
    });

    $items.addEventListener('click', event => {
        event.preventDefault();
        
        $items.classList.remove('-active');
    })
})();
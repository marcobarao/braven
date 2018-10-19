'use strict';

(function () {
    const $container = document.querySelector('.container-braven')
    const $info = document.querySelector('.information-braven')
    const $moreInfo = document.querySelector('.more-info');

    $moreInfo.addEventListener('click', event => {
        event.preventDefault();

        $container.classList.toggle('-info');
        $info.classList.toggle('-active');
        $moreInfo.classList.toggle('-active');
    });
})();
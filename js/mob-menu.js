(() => {
    const refs = {
        openMenuBtn: document.querySelector('.menu-burger'),
        closeMenuBtn: document.querySelector('.menu-mob__close-btn'),
        menu: document.querySelector('.menu-mob'),
    };

    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.menu.classList.toggle('is-hidden');
    }
})();

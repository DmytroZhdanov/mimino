(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open-main]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.body
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('disabled-scroll');
  }
})();

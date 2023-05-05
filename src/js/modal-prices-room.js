(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-prices-open-f]'),
    openSecondModalBtn: document.querySelector('[data-modal-prices-open-e]'),
    closeModalBtn: document.querySelector('[data-modal-prices-close]'),
    modal: document.querySelector('[data-modal-prices]'),
    body: document.body,
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openSecondModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('disabled-scroll');
  }
})();

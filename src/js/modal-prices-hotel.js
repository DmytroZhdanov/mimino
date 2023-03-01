(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-prices-open-a]'),
    openSecondModalBtn: document.querySelector('[data-modal-prices-open-b]'),
    openThirdModalBtn: document.querySelector('[data-modal-prices-open-c]'),
    openFourthModalBtn: document.querySelector('[data-modal-prices-open-d]'),
    openFifthModalBtn: document.querySelector('[data-modal-prices-open-e]'),
    closeModalBtn: document.querySelector('[data-modal-prices-close]'),
    modal: document.querySelector('[data-modal-prices]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openSecondModalBtn.addEventListener('click', toggleModal);
  refs.openThirdModalBtn.addEventListener('click', toggleModal);
  refs.openFourthModalBtn.addEventListener('click', toggleModal);
  refs.openFifthModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

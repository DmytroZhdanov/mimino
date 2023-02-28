(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-prices-open-a]'),
    openSecondModalBtn: document.querySelector('[data-modal-room-open-b]'),
    openThirdModalBtn: document.querySelector('[data-modal-room-open-c]'),
    openFourthModalBtn: document.querySelector('[data-modal-room-open-d]'),
    closeModalBtn: document.querySelector('[data-modal-prices-close]'),
    modal: document.querySelector('[data-modal-prices]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openSecondModalBtn.addEventListener('click', toggleModal);
  refs.openThirdModalBtn.addEventListener('click', toggleModal);
  refs.openFourthModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

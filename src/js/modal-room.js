(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-open1]'),
    openModalBtn: document.querySelector('[data-modal-room-open2]'),
    closeModalBtn: document.querySelector('[data-modal-room-close]'),
    modal: document.querySelector('[data-modal-room]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

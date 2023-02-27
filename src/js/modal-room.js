(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-open-a]'),
    openModalBtn: document.querySelector('[data-modal-room-open-b]'),
    closeModalBtn: document.querySelector('[data-modal-room-close]'),
    modal: document.querySelector('[data-modal-room]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-table-open1]'),
    openModalBtn: document.querySelector('[data-modal-table-open2]'),
    closeModalBtn: document.querySelector('[data-modal-table-close]'),
    modal: document.querySelector('[data-modal-table]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-table-open-c]'),
    openSecondModalBtn: document.querySelector('[data-modal-table-open-d]'),
    closeModalBtn: document.querySelector('[data-modal-table-close]'),
    modal: document.querySelector('[data-modal-table]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openSecondModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

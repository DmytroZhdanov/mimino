(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-table-open-c]'),
    openSecondModalBtn: document.querySelector('[data-modal-table-open-d]'),
    closeModalBtn: document.querySelector('[data-modal-table-close]'),
    modal: document.querySelector('[data-modal-table]'),
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

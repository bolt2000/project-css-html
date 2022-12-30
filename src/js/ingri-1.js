(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-ingri-1]'),
    closeModalBtn: document.querySelector('[data-close-ingri-1]'),
    modal: document.querySelector('[data-ingri-1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
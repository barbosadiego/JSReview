export default function initModal(){

  const openModal = document.querySelector('[data-modal="abrir"]');
  const closeModal = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    modal.classList.toggle('ativo');
  }

  function outsideClick(event) {
    // console.log(event.target)
    if(event.target === this){
      toggleModal(event)
    }
  }
  
  openModal.addEventListener('click', toggleModal);
  closeModal.addEventListener('click', toggleModal);
  modal.addEventListener('click', outsideClick)
}


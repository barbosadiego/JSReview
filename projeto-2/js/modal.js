export default class Modal {
  constructor(openBtn, closeBtn, modal) {
    this.openModal = document.querySelector(openBtn);
    this.closeModal = document.querySelector(closeBtn);
    this.modal = document.querySelector(modal);

    this.outsideClick = this.outsideClick.bind(this);
    this.eventToggleModal = this.eventToggleModal.bind(this);
  }

  toggleModal() {
    this.modal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    // console.log(this);
    event.preventDefault();
    this.toggleModal();
  }

  outsideClick(event) {
    if (event.target === this.modal) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.openModal.addEventListener("click", this.eventToggleModal);
    this.closeModal.addEventListener("click", this.eventToggleModal);
    this.modal.addEventListener("click", this.outsideClick);
  }

  init() {
    if (this.openModal && this.closeModal && this.modal) {
      this.addModalEvents();
    }
    return this
  }
}

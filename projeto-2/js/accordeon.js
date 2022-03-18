export default class AccordeonNav {
  constructor(list){
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordeon(item){
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
  // adiciona eventos ao accordeon
  addAccordionEvent(){
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordeon(item));
    });
  }
  // iniciar função
  init(){
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordeon(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this
  }
}


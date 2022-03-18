export default class TabNav {
  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
  }
  // ativa a tab de acordo com o index
  activeTab(index) {
    this.content.forEach((item) => item.classList.remove(item.dataset.anime));
    this.content[index].classList.add(this.content[index].dataset.anime);
  }
  // adiciona os eventos nas tabs
  addTabEvent() {
    this.menu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.menu.length && this.content.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabEvent();
    }
    return this
  }
}

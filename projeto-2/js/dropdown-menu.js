import outsideClick from "./outside-click.js";
export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeCLass = "ativo";
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((link) => {
      this.events.forEach((userEvent) => {
        link.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeCLass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeCLass);
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}

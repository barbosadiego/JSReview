export default function iniDropdown() {}

const links = document.querySelectorAll("[data-dropdown]");

links.forEach((link) => {
  ["touchstart", "click"].forEach((userEvent) => {
    link.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("ativo");
  console.log(this);
}

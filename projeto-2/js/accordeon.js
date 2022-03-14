export default function initAccordeonNav() {
  const accordeonList = document.querySelectorAll("[data-js='accordeon'] dt");
  const activeClass = "ativo";

  if (accordeonList.length) {
    accordeonList[0].classList.add(activeClass);
    accordeonList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordeon() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordeonList.forEach((item) => {
      item.addEventListener("click", activeAccordeon);
    });
  }
}

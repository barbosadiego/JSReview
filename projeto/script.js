function iniTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((item) => item.classList.remove("ativo"));
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

iniTabNav();

function initAccordeonNav() {
  const accordeonList = document.querySelectorAll(".js-accordeon dt");
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

initAccordeonNav();

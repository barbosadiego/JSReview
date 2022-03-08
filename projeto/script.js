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

function initScroll() {
  const menu = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSuave(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // alternative form
    // const sectionTop = section.offsetTop
    // window.scrollTo({
    //   top: sectionTop,
    //   behavior: 'smooth',
    // })
  }

  menu.forEach((link) => link.addEventListener("click", scrollSuave));
}

initScroll();

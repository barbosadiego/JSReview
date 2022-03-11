function iniTabNav() {
  const tabMenu = document.querySelectorAll("[data-js='tab-menu'] li");
  const tabContent = document.querySelectorAll("[data-js='tab-content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("show-down");

    function activeTab(index) {
      tabContent.forEach((item) => item.classList.remove(item.dataset.anime));
      tabContent[index].classList.add(tabContent[index].dataset.anime);
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

initAccordeonNav();

function initScroll() {
  const menu = document.querySelectorAll('[data-js="menu"] a[href^="#"]');

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

function initAnimaScroll() {
  const section = document.querySelectorAll("[data-js='scroll']");

  if (section.length) {
    const windowHalf = Math.round(window.innerHeight * 0.6);

    function animaScroll() {
      section.forEach((item) => {
        const top = item.getBoundingClientRect().top - windowHalf;
        // console.log(top);
        if (top < 0) {
          item.classList.add("ativo");
        }
      });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}

initAnimaScroll();


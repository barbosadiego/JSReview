export default function initScroll() {
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

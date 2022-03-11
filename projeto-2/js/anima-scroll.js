export default function initAnimaScroll() {
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


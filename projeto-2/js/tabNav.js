export default function iniTabNav() {
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
  // console.log('oi')
}

export default function initTooltip() {}

const tooltips = document.querySelectorAll("[data-tooltip]");

tooltips.forEach((item) => {
  item.addEventListener("mouseenter", onMouseOver);
});

function onMouseOver() {
  const tooltipBox = createTooltipBox(this);

  this.addEventListener("mousemove", onMouseMove);
  onMouseMove.tooltipBox = tooltipBox;

  this.addEventListener("mouseleave", onMouseLeave);
  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;

  // console.log(this)
}

const onMouseMove = {
  handleEvent(event) {
    this.tooltipBox.style.left = event.pageX + 20 + "px";
    this.tooltipBox.style.top = event.pageY + 20 + "px";
  },
};

const onMouseLeave = {
  handleEvent() {
    this.tooltipBox.remove();
    this.element.removeEventListener("mouseleave", onMouseLeave);
  },
};

function createTooltipBox(element) {
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.classList.add("tooltip");
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}

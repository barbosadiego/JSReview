import ScrollSuave from "./scroll-suave.js";
import AccordeonNav from "./accordeon.js";
import tabNav from "./tabNav.js";
import Modal from "./modal.js";
import Tooltip from "./tooltip.js";
import fetchAnimais from "./fetch.js";
import initMenuMobile from "./menu-mobile.js";
import initWeekTime from "./time-week.js";
import fetchBitcoin from "./bitcoin-fetch.js";
import AnimaScroll from "./anima-scroll.js";
import DropdownMenu from "./dropdown-menu.js";

const scrollSuave = new ScrollSuave('[data-js="menu"] a[href^="#"]');
scrollSuave.init();

const accordeon = new AccordeonNav("[data-js='accordeon'] dt");
accordeon.init();

const tabnav = new tabNav("[data-js='tab-menu'] li","[data-js='tab-content'] section")
tabnav.init();

const modal = new Modal('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]');
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais('./animaisapi.json', '.numeros-grid');
fetchBitcoin("https://blockchain.info/ticker", ".bitcoin");

const animaScroll = new AnimaScroll("[data-js='scroll']");
animaScroll.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init()

initWeekTime();
initMenuMobile();

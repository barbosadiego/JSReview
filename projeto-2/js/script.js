import ScrollSuave from "./scroll-suave.js";
import AccordeonNav from "./accordeon.js";
import tabNav from "./tabNav.js";
import initAnimaScroll from "./anima-scroll.js";
import initModal from "./modal.js";
import initTooltip from "./tooltip.js";
import iniDropdown from "./dropdown-menu.js";
import initMenuMobile from "./menu-mobile.js";
import initWeekTime from "./time-week.js";
import initFetchAnimais from "./fetch.js";
import iniBitcoin from "./bitcoin-fetch.js";

const scrollSuave = new ScrollSuave('[data-js="menu"] a[href^="#"]');
scrollSuave.init();

const accordeon = new AccordeonNav("[data-js='accordeon'] dt");
accordeon.init();

const tabnav = new tabNav("[data-js='tab-menu'] li","[data-js='tab-content'] section")
tabnav.init();


initAnimaScroll();
initModal();
initTooltip();
iniDropdown();
initMenuMobile();
initWeekTime();
initFetchAnimais();
iniBitcoin();

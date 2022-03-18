import iniTabNav from "./tabNav.js";
import ScrollSuave from "./scroll-suave.js";
import initAnimaScroll from "./anima-scroll.js";
import initAccordeonNav from "./accordeon.js";
import initModal from "./modal.js";
import initTooltip from "./tooltip.js";
import iniDropdown from "./dropdown-menu.js";
import initMenuMobile from "./menu-mobile.js";
import initWeekTime from "./time-week.js";
import initFetchAnimais from "./fetch.js";
import iniBitcoin from "./bitcoin-fetch.js";

const scrollSuave = new ScrollSuave('[data-js="menu"] a[href^="#"]');
scrollSuave.init()

iniTabNav();
initAnimaScroll();
initAccordeonNav();
initModal();
initTooltip();
iniDropdown();
initMenuMobile();
initWeekTime();
initFetchAnimais();
iniBitcoin();

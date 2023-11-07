import navBar from "./doom/navbar.js";
import scrollBtn from "./doom/btnScroll.js";
import mediaQuerys from "./doom/mediaQuerys.js";
const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    navBar('.hamburger-box','.nav-principal','.header__content');
    scrollBtn('.btn-scroll');
    mediaQuerys('.img-slider-1','.img-slider-2','.img-slider-3');
})
import { refs } from './refs.js';
import { appendImagesMarkup } from "./appendImagesMarkup.js";
import debounce from 'lodash.debounce';

// Add images
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);

function onLoadMoreBtn() {
    appendImagesMarkup();

    macyInstance.runOnImageLoad(() =>
        macyInstance.recalculate(true), true);
    
    lightbox.refresh();

    refs.loadMoreBtn.classList.add('hidden');
    refs.gradient.classList.add('hidden');
}

// Siema
const mySiema = new Siema({
    selector: refs.slider,
    duration: 1000,
    easing: 'cubic-bezier(.17,.67,.32,1.34)',
    loop: true,
    onInit: () => { console.log("Siema work!")},
});

refs.prev.addEventListener('click', () => mySiema.prev(), { passive: true });
refs.next.addEventListener('click', () => mySiema.next(), { passive: true });

// AOS
AOS.init();

// Macy
const macyInstance = Macy({
    container: refs.gallery,
    columns: 3,
    margin: 44,
    trueOrder: true,
    breakAt: {
        1024: 3,
        768: 2,
        640: 1,
    },
});

// SimpleLightbox
const lightbox = new SimpleLightbox('.projects__list a');

// Mobile menu
refs.mobMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    refs.mobMenuBtn.classList.toggle('is-active');
    refs.mobMenu.classList.toggle('is-active');
}

// Header scroll
window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
    const headerOffsetTrigger = refs.header.offsetTop;
    const pageOffset = window.pageYOffset;

    if (pageOffset > headerOffsetTrigger) {
        refs.header.classList.add('transparency');
    } else {
        refs.header.classList.remove('transparency');
    }
}

// Search input
refs.searchOpen.addEventListener('click', onSearchOpen);
refs.searchClose.addEventListener('click', onSearchClose);
refs.input.addEventListener('input', onInputChange);

function onSearchOpen() {
    refs.searchForm.classList.add('is-active');
}

function onSearchClose() {
    refs.searchForm.classList.remove('is-active');
}

function onInputChange(e) {
    if (e.currentTarget) {
        const text = e.currentTarget.value;
        console.log(text); 

        const elements = document.querySelectorAll("p, h1, h2, h3, h4, span, a");

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.innerText?.toLowerCase().includes(text)) {
                element.classList.add('highlight');
            }
            if (e.currentTarget.value === '') {
                element.classList.remove('highlight');
            }
        }
    }
}

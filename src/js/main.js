import { refs } from './refs.js';
import { appendImagesMarkup } from "./appendImagesMarkup.js";

// Add images
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);

function onLoadMoreBtn() {
    appendImagesMarkup();

    macyInstance.runOnImageLoad(() =>
        macyInstance.recalculate(true), true);
    
    lightbox.refresh();

    refs.loadMoreBtn.disabled = true;
}

// Siema
const mySiema = new Siema({
    selector: refs.slider,
    duration: 1000,
    easing: 'cubic-bezier(.17,.67,.32,1.34)',
    loop: true,
    onInit: () => { console.log("Siema work!")},
});

refs.prev.addEventListener('click', () => mySiema.prev())
refs.next.addEventListener('click', () => mySiema.next());

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
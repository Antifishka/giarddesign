// Siema
// const slider = document.querySelector('.hero__slider');
// const prev = document.querySelector('.hero__btn--prev');
// const next = document.querySelector('.hero__btn--next');

// const mySiema = new Siema({
//     selector: slider,
//     duration: 1000,
//     easing: 'cubic-bezier(.17,.67,.32,1.34)',
//     loop: true,
//     onInit: () => { console.log("Siema work!")},
// });


// AOS
AOS.init();

// Macy
const macyInstance = Macy({
    container: '.projects__list',
    columns: 3,
    margin: 44,
    trueOrder: true,
});

// SimpleLightbox
const lightbox = new SimpleLightbox('.projects__list a');
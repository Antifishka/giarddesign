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
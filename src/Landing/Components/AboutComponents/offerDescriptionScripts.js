export const displayOffers = () => {
    const icons = [...document.querySelectorAll('.offers__icon')];
    const titles = [...document.querySelectorAll('.offers__title')];
    const descriptions = [...document.querySelectorAll('.offers__description')];
    const header = document.querySelector('.about__header');
    let headerHeight;

    if (header) {
        headerHeight = header.offsetHeight;
    }

    if (window.scrollY * 2 >= headerHeight) {
        icons.forEach(i => i.classList.add('offers__icon--active'));
        titles.forEach(t => t.classList.add('offers__title--active'));
        descriptions.forEach(d => d.classList.add('offers__description--active'));
    }
    window.addEventListener('scroll', displayOffers);
}


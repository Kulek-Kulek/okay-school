
let scrollPosition = 0;

export const companyLogosScrollEffect = () => {
    const dostsSection = document.querySelector('.three-dots');
    let dotsSectionFromTop;
    if (dostsSection) {
        dotsSectionFromTop = dostsSection.offsetTop;
    }
    const position = document.body.getBoundingClientRect().top;
    const logosOdd = [...document.querySelectorAll('.our-clients__logo-div:nth-of-type(odd)')];
    const logosEven = [...document.querySelectorAll('.our-clients__logo-div:nth-of-type(even)')];

    if (window.scrollY >= dotsSectionFromTop) {
        if (position < scrollPosition) {
            logosOdd.forEach(logo => logo.classList.add('our-clients__logo-div--active'));
            logosEven.forEach(logo => logo.classList.add('our-clients__logo-div--active'));
            scrollPosition = position;
        } else {
            scrollPosition = position;
            logosOdd.forEach(logo => logo.classList.remove('our-clients__logo-div--active'));
            logosEven.forEach(logo => logo.classList.remove('our-clients__logo-div--active'));
        }
    }


    window.addEventListener('scroll', companyLogosScrollEffect);
}
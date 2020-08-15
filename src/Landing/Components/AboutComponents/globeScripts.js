export const globeSloganEffect = () => {
    const button = document.querySelector('.globe__button')
    const footer = document.querySelector('.footer');
    const globeSloganMain = document.querySelector('.globe__slogan-main');
    const globeSloganMinor = document.querySelector('.globe__slogan-minor');

    const buttonClicked = () => {
        globeSloganMain.classList.add('globe__slogan-main--active');
        globeSloganMinor.classList.add('globe__slogan-minor--active');
        setTimeout(() => {
            footer.scrollIntoView();
            globeSloganMain.classList.remove('globe__slogan-main--active');
            globeSloganMinor.classList.remove('globe__slogan-minor--active');
        }, 1000);
    }
    button.addEventListener('click', buttonClicked);
}


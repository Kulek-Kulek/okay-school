export const changeSlides = () => {
    const cards = [...document.querySelectorAll('.sliding-carousel-banner__card')];
    let nextFrontCardActiveIndex;
    let nextLeftCardActiveIndex;
    let nextRightCardActiveIndex;
    const activeFrontCardIndex = cards.findIndex(card => card.classList.contains('sliding-carousel-banner__card--front'));
    cards[activeFrontCardIndex].classList.remove('sliding-carousel-banner__card--front');
    nextFrontCardActiveIndex = activeFrontCardIndex + 1;

    const activeLeftCardIndex = cards.findIndex(card => card.classList.contains('sliding-carousel-banner__card-background--left'));
    cards[activeLeftCardIndex].classList.remove('sliding-carousel-banner__card-background--left');
    nextLeftCardActiveIndex = activeLeftCardIndex + 1;

    const activeRightCardIndex = cards.findIndex(card => card.classList.contains('sliding-carousel-banner__card-background--right'));
    cards[activeRightCardIndex].classList.remove('sliding-carousel-banner__card-background--right');
    nextRightCardActiveIndex = activeRightCardIndex + 1;

    if (nextFrontCardActiveIndex === cards.length) {
        nextFrontCardActiveIndex = 0;
    }
    if (nextLeftCardActiveIndex === cards.length) {
        nextLeftCardActiveIndex = 0;
    }
    if (nextRightCardActiveIndex === cards.length) {
        nextRightCardActiveIndex = 0;
    }

    cards[nextFrontCardActiveIndex].classList.add('sliding-carousel-banner__card--front');

    cards[nextLeftCardActiveIndex].classList.add('sliding-carousel-banner__card-background--left');

    cards[nextRightCardActiveIndex].classList.add('sliding-carousel-banner__card-background--right');

}
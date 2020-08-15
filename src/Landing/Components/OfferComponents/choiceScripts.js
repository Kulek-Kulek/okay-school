export const offerTypeEffect = () => {
    const offers = [...document.querySelectorAll('.offer__type')];
    offers.forEach(offer => offer.classList.add('offer__type--active'));
}
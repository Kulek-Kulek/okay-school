import React from 'react';

import SloganCarouselItem from '../SloganCrl/SloganCarouselItem';
import './SloganCarousel.css';


const sloganCarouselData = [
    {
        id: 'one',
        heading: 'Krok 1 - wybierz kurs',
        paragraph: 'Pomyśl czego potrzebujesz i wybierz kurs dla siebie. Mamy odpowiedź na wszystko. Bez ryzka! Pamiętaj, masz dwa tygodnie by zmienić swoją decyzję, a nawet zrezygnować.',
        btnText: 'Wybierz swój kurs',
        btn: 'sliding-carousel-banner__button',
        classHeading: 'sliding-carousel-banner__heading',
        classParagraph: 'sliding-carousel-banner__paragraph',
        btnWrapper: 'sliding-carousel-banner__button-wrapper fff'
    },
    {
        id: 'two',
        heading: 'Krok 2 - wyślij formularz',
        paragraph: 'Wypełnij i wyślij formularz. Nie dokonuj żadnej wpłaty. Fakturę otrzymasz dopiero po zakwalifikowaniu do odpowiedniej grupy i dopasowaniu terminu zajęć.',
        btnText: 'Wybierz swój kurs',
        btn: 'sliding-carousel-banner__button',
        classHeading: 'sliding-carousel-banner__heading',
        classParagraph: 'sliding-carousel-banner__paragraph',
        btnWrapper: 'sliding-carousel-banner__button-wrapper'
    },
    {
        id: 'three',
        heading: 'witaj na pokładzie',
        paragraph: 'To właściwie wszystko. Skontaktujemy się z Tobą w krócej niż jeden dzien roboczy. Zaczynamy!',
        btnText: 'Wybierz swój kurs',
        btn: 'sliding-carousel-banner__button',
        classHeading: 'sliding-carousel-banner__heading',
        classParagraph: 'sliding-carousel-banner__paragraph',
        btnWrapper: 'sliding-carousel-banner__button-wrapper'
    }
]

const SloganCarousel = props => {

    const carouselSlogans = sloganCarouselData.map(slogan => (
        <SloganCarouselItem
            key={slogan.id}
            heading={slogan.heading}
            paragraph={slogan.paragraph}
            btnText={slogan.btnText}
            btn={slogan.btn}
            classHeading={slogan.classHeading}
            classParagraph={slogan.classParagraph}
            btnWrapper={slogan.btnWrapper}
            arrowClassName='sliding-carousel-banner__button-arrow btn-arrow-right--active'
        />
    ))

    return (
        <div className='sliding-carousel-banner__slogan-wrapper'>
            {carouselSlogans}
        </div>
    );
}

export default SloganCarousel;
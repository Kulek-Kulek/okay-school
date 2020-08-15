import React from 'react';

import imgKids from '../../../../images/hero/kids.jpg'
import imgBuisnessmen from '../../../../images/hero/businessmen.jpg';
import imgHolidayStudying from '../../../../images/hero/holiday-studying.jpg';
import CarouselItem from './Carousel-item';
import './Carousel.css';



const Carousel = props => {

    const carouselElementsData = [
        { src: imgKids, alt: 'students-kids', class: 'carousel__img', majorSlogan: 'Dla dzieci, młodzieży i dorosłych', minorSlogan: 'Stacjonarnie lub online' },
        { src: imgBuisnessmen, alt: 'buisnessmen', class: 'carousel__img', majorSlogan: 'Angielski dla biznesu', minorSlogan: 'Profesjonalnie i elastycznie' },
        { src: imgHolidayStudying, alt: 'holigay-studing', class: 'carousel__img', majorSlogan: 'Kursy w Anglii', minorSlogan: 'Połączenie relaksu i praktyki' },
    ];


    const carouselElements = carouselElementsData.map(image => (
        <CarouselItem
            key={image.alt}
            src={image.src}
            alt={image.alt}
            class={image.class}
            majorSlogan={image.majorSlogan}
            minorSlogan={image.minorSlogan}
        />
    ));

    return (
        <div className='carousel'>
            {carouselElements}
        </div>
    );
};

export default Carousel;
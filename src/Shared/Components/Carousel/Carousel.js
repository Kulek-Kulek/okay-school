import React from 'react';

import imgKids from '../../../images/hero/kids.jpg';
import imgBuisnessmen from '../../../images/hero/businessmen.jpg';
import imgHolidayStudying from '../../../images/hero/holiday-studying.jpg';
import './Carousel.css';



const Carousel = props => {
    return (
        <div className='carousel'>
            <img src={imgKids} alt='students-kids' className='carousel__img' />
            <img src={imgBuisnessmen} alt='buisnessmen' className='carousel__img' />
            <img src={imgHolidayStudying} alt='holigay-studing' className='carousel__img' />
            <div className='carousel__slogan'>
                <h1 className='carousel__sloganMain'>Dla dzieci, młodzieży i dorosłych</h1>
                <h2 className='carousel__sloganTwo'>Wygodnie z dojazdem do domu</h2>
            </div>
            <div className='carousel__slogan'>
                <h1 className='carousel__sloganMain ttt'>Angielski dla biznesu</h1>
                <h2 className='carousel__sloganTwo'>Profesjonalnie i elastycznie</h2>
            </div>
            <div className='carousel__slogan'>
                <h1 className='carousel__sloganMain'>Kursy w Anglii</h1>
                <h2 className='carousel__sloganTwo'>Połączenie relaksu i praktyki</h2>
            </div>
        </div>
    );
}

export default Carousel;
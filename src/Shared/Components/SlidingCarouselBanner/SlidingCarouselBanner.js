import React, { useEffect } from 'react';

import SloganCarousel from './SloganCrl/SloganCarousel';
import ImageCarousel from './ImageCrl/ImageCarousel';
import { changeSlides } from './slidingCarouselScripts';
import './SlidingCarouselBanner.css';


const SlidingCarouselBanner = props => {
    useEffect(() => {
        const interval = setInterval(changeSlides, 6000)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='sliding-carousel-banner'>
            <SloganCarousel />
            <ImageCarousel sliderData={props.sliderData} />
        </div>
    );
}

export default SlidingCarouselBanner;
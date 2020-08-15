import React from 'react';

import ImageCarouselItem from './ImageCarouselItem';
import './ImageCarousel.css';


const ImageCarousel = props => {
    let carouselImages;
    if (props.sliderData) {
        carouselImages = props.sliderData.map((image, index) => (

            <ImageCarouselItem
                key={image.alt}
                wraperClass={`${image.wrapperClass} ${image.wrapperClass}-${index} ${image.wrapperClass}${image.wrapperActiveClass}`}
                innerDivClass={image.innerDivClass}
                innerSpanClass={image.innerSpanClass}
                innerHeadingClass={image.innerHeadingClass}
                imageClass={`${image.imageClass} ${image.imageClass}-${index}`}
                src={image.src}
                alt={image.alt}
                innerHeadingText={image.innerHeadingText}
                innerSpanText={image.innerSpanText}
            />
        ));
    }


    return (
        <div className='sliding-carousel-banner__image-wrapper'>
            {/* {inputs} */}
            <div className='sliding-carousel-banner__cards'>
                {carouselImages}
            </div>

        </div>
    );
}

export default ImageCarousel;
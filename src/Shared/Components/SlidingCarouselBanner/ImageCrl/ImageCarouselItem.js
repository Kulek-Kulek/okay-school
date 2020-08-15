import React from 'react';


import './ImageCarouselItem.css';


const ImageCarouselItem = props => {
    return (
        <div className={props.wraperClass}>
            <img src={props.src} alt={props.alt} className={props.imageClass} />
            <div className={props.innerDivClass}>
                <h2 className={props.innerHeadingClass}>{props.innerHeadingText}</h2>
                <span className={props.innerSpanClass}>{props.innerSpanText}</span>
            </div>
        </div>
    );
}

export default ImageCarouselItem;
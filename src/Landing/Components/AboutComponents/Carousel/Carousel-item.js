import React from 'react';


const CarouselItem = props => {
    return (
        <React.Fragment>
            <img src={props.src} alt={props.alt} className={props.class} />
            <div className='carousel__slogan'>
                <h1 className='carousel__sloganMain'>{props.majorSlogan}</h1>
                <h2 className='carousel__sloganTwo'>{props.minorSlogan}</h2>
            </div>
        </React.Fragment>
    );
};

export default CarouselItem;
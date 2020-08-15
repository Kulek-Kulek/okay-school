import React from 'react';

import Button from '../../../Elements/Button/Button';
import './SloganCarouselItem.css';


const SloganCarouselItem = props => {

    const chooseCourseButtonHandler = () => {
        const courses = document.querySelector('.courses-section');
        courses.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='sliding-carousel-banner__slogan'>
            <h1 className={props.classHeading}>{props.heading}</h1>
            <p className={props.classParagraph}>{props.paragraph}</p>
            <div className={props.btnWrapper}>
                <Button
                    btn={props.btn}
                    btnText={props.btnText}
                    arrowClassName={props.arrowClassName}
                    click={chooseCourseButtonHandler}
                />
            </div>
        </div>
    );
}

export default SloganCarouselItem;
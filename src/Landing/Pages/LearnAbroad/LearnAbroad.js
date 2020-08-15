import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Courses from '../../../Landing/Components/OfferComponents/CourseComponents/Courses';
import { navigationToggle } from '../../../Shared/Components/Navigation/navigationToggle';

import img1 from '../../../images/slider/abroad1.jpg';
import img2 from '../../../images/slider/abroad2.jpg';
import img3 from '../../../images/slider/abroad3.jpg';

import './LearnAbroad.css';

const learnAbroadSliderData = [
    {
        src: img1,
        alt: 'slide-picture-one',
        wrapperClass: 'sliding-carousel-banner__card',
        wrapperActiveClass: '--front',
        imageClass: 'sliding-carousel-banner__img sliding-carousel-banner__be-img',
        imageActiveClass: '--active',
        innerDivClass: 'sliding-carousel-banner__innerDiv',
        innerHeadingClass: 'sliding-carousel-banner__innerHeading',
        innerSpanClass: 'sliding-carousel-banner__innerSpan',
        innerHeadingText: 'Krok 1',
        innerSpanText: 'Wybierz swój kurs.'
    },
    {
        src: img2,
        alt: 'slide-picture-two',
        wrapperClass: 'sliding-carousel-banner__card sliding-carousel-banner__card-background--right',
        imageClass: 'sliding-carousel-banner__img sliding-carousel-banner__be-img',
        innerDivClass: 'sliding-carousel-banner__innerDiv',
        innerHeadingClass: 'sliding-carousel-banner__innerHeading',
        innerSpanClass: 'sliding-carousel-banner__innerSpan',
        innerHeadingText: 'Krok 2',
        innerSpanText: 'Wypełnij i wyślij formularz. Nie dokonuj żadnej wpłaty.'
    },
    {
        src: img3,
        alt: 'slide-picture-three',
        wrapperClass: 'sliding-carousel-banner__card sliding-carousel-banner__card-background--left',
        imageClass: 'sliding-carousel-banner__img sliding-carousel-banner__be-img',
        innerDivClass: 'sliding-carousel-banner__innerDiv',
        innerHeadingClass: 'sliding-carousel-banner__innerHeading',
        innerSpanClass: 'sliding-carousel-banner__innerSpan',
        innerHeadingText: 'Krok 3',
        innerSpanText: 'Poczekaj na potwierdzenie dostępności terminów. To zajmie nam dosłownie chwilkę.'
    }
];


const LearnAbroad = props => {

    useEffect(() => {
        navigationToggle();
    }, []);

    const location = useLocation();

    return (
        <React.Fragment>
            <Courses
                courseType={location.pathname.slice(7)}
                sliderData={learnAbroadSliderData}
            />
        </React.Fragment>
    );
}

export default LearnAbroad;
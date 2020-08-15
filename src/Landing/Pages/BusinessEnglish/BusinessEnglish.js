import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Courses from '../../../Landing/Components/OfferComponents/CourseComponents/Courses';
import { navigationToggle } from '../../../Shared/Components/Navigation/navigationToggle';

import img1 from '../../../images/slider/me.png';
import img2 from '../../../images/slider/b2b1.jpg';
import img3 from '../../../images/slider/b2b2.jpg';

import './BusinessEnglish.css';


const businessEnglishSliderData = [
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
        innerSpanText: 'Poczekaj na potwierdzenie terminów zajęć. To zajmie nam dosłownie chwilkę.'
    }
];

const BusinessEnglish = props => {

    useEffect(() => {
        navigationToggle();
    }, []);

    return (
        <React.Fragment>
            <Courses
                courseType={useLocation().pathname.slice(7)}
                sliderData={businessEnglishSliderData}
            />
        </React.Fragment>
    );
}

export default BusinessEnglish;
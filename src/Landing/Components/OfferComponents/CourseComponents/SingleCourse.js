import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LinkElement from '../../../../Shared/Elements/LinkElement/LinkElement';
import * as actions from '../../../../store/actions/index';
import './SingleCourse.css';


const SingleCourse = props => {

    const dispatch = useDispatch();

    useEffect(() => {
        let index = 0;
        const colors = ['#df0e99;', 'orange', 'blue', 'green'];
        const courses = [...document.querySelectorAll('.course')];


        for (let course of courses) {
            if (index === colors.length) {
                index = 0;
            }
            course.style.border = `1px solid ${colors[index]}`;
            course.style.boxShadow = `3px 1px 5px 0px ${colors[index]}`
            const title = course.querySelector('.course__title');
            title.style.color = colors[index];

            index++;
            const advgs = [...course.querySelectorAll('.course__single-advg')];
            for (let advg of advgs) {
                let color = colors[index]
                advg.style.color = color;
                advg.addEventListener('mouseover', () => advg.style.color = '#fff');
                advg.addEventListener('mouseout', () => advg.style.color = color || '#df0e99');
            }
        }
    }, []);

    const advantages = props.advantages.map(advg => (
        <div key={advg} className={`course__advantages ${props.class + '__advantages'}`} >
            <i className={`fas fa-check-double course__i ${props.class + '__i'}`} ></i>
            <span className={`course__single-advg ${props.class + '__single-advg'}`}>{advg}</span>
        </ div>
    ));


    const courseChosenHandler = () => {
        dispatch(actions.addCourseToBasket(props.title, props.price));
    }

    return (
        <div className={`course ${props.class} `}>
            <div className={`course__overview ${props.class + '__overview'}`}>
                <div className={`course__title-div ${props.class + '__title-div'}`}>
                    <h2 className={`course__title ${props.class + '__title'}`}>{props.title}</h2>
                    <p className={`course__forwho ${props.class + '__forwho'}`}>{props.forWho}</p>
                </div>
                <p className={`course__desc ${props.class + '__desc'}`}>{props.desc}</p>
                {advantages}
                <p className={`course__terms ${props.class + '__terms'}`}>{props.terms}</p>
                <span className={`course__price ${props.class + '__price'}`}>Cena całego kursu: {props.price || 'negocjowana'} {props.price ? (props.class === 'learn-abroad' ? 'GBP' : 'PLN') : ''}</span>
                <LinkElement
                    to='/basket'
                    className='course__a'
                    type='text'
                    name={props.title}
                    id={props.title}
                    btnText='zapytaj o dostępność'
                    btn='course-button'
                    arrowClassName='btn-arrow-right--active'
                    click={courseChosenHandler}
                />
            </div>
            <div className={`course__img-wrapper ${props.class + '__img-wrapper'}`}>
                <img className='course__img' src={props.src} alt={props.alt} />
            </div>
        </div >
    );
}

export default SingleCourse;
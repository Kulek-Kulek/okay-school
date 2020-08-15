import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import imgGlobe from '../../../images/globe/globe.png';
// import { globeSloganEffect } from './globeScripts';
import Button from '../../../Shared/Elements/Button/Button';
import * as actions from '../../../store/actions/index';

import './Globe.css';

const Globe = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const button = document.querySelector('.globe__button')
        const footer = document.querySelector('.footer');
        const globeSloganMain = document.querySelector('.globe__slogan-main');
        const globeSloganMinor = document.querySelector('.globe__slogan-minor');

        const buttonClicked = () => {
            globeSloganMain.classList.add('globe__slogan-main--active');
            globeSloganMinor.classList.add('globe__slogan-minor--active');
            setTimeout(() => {
                footer.scrollIntoView({ behavior: 'smooth' });
                dispatch(actions.toggleContactModal('contactModal'));
                globeSloganMain.classList.remove('globe__slogan-main--active');
                globeSloganMinor.classList.remove('globe__slogan-minor--active');
            }, 900);
        }
        button.addEventListener('click', buttonClicked);
    }, [dispatch]);


    return (
        <section className='globe'>
            <div className="globe__img-wrapper">
                <img src={imgGlobe} alt='globe' className='globe__img' />
                <h2 className='globe__slogan globe__slogan-minor'>myśląc globalnie</h2>
                <h4 className='globe__slogan globe__slogan-main'>pracując lokalnie</h4>
            </div>
            <div className='globe__button-wrapper'>
                <span className='globe__find-me-question'>Jak mnie znaleźć?</span>
                <div className='globe__button-div'>
                    <Button btnText='wystarczy jedno kliknięcie'
                        btn='globe__button' arrowClassName='btn-arrow-right--active'>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Globe;
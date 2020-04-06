import React from 'react';

import imgGlobe from '../../../images/globe/globe.png';
import './Globe.css';
import Button from '../../Elements/Button/Button';


const Globe = props => {
    return (
        <section className='globe'>
            <div className="globe__img-wrapper">
                <img src={imgGlobe} alt='globe' className='globe__img' />
                <h2 className='globe__slogan'>myśląc globalnie</h2>
                <h4 className='globe__slogan'>pracując lokalnie</h4>
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
import React, { useEffect } from 'react';

import imgGe from '../../../images/offer/ge.jpg';
import imgB2B from '../../../images/offer/business.jpg';
import imgAbroad from '../../../images/offer/abroad.jpg';
import LinkElement from '../../../Shared/Elements/LinkElement/LinkElement';
import { offerTypeEffect } from './choiceScripts.js';
import './Choice.css';

const Choice = props => {

    useEffect(() => {
        offerTypeEffect();
    }, []);

    return (
        <div className='offer__choice'>
            <div className='offer__type'>
                <img src={imgGe} alt='offer_image' className='offer__img' />
                <div className='offer__course-desc'>
                    <h3 className='offer__desc-heading'>angielski dla każdego</h3>
                    <p className='offer__desc-paragraph'>Kursy indywidualne i grupowe, matura i egzamin po ósmej klasie.</p>
                    <div className='offer__button-div'>
                        <LinkElement
                            to='/offer/general-english'
                            className='offer-a'
                            btn='offer__button'
                            btnText='angielski dla każdego' arrowClassName='btn-arrow-right--active'
                        />
                    </div>
                </div>
            </div>
            <div className='offer__type'>
                <img src={imgB2B} alt='offer_image' className='offer__img' />
                <div className='offer__course-desc'>
                    <h3 className='offer__desc-heading'>angielski dla firm</h3>
                    <p className='offer__desc-paragraph'>Kursy indywidualne,grupowe i te szyte na miarę.</p>
                    <div className='offer__button-div'>
                        <LinkElement
                            to='/offer/business-english'
                            className='offer-a'
                            btn='offer__button'
                            btnText='angielski w biznesie' arrowClassName='btn-arrow-right--active'
                        />
                    </div>
                </div>
            </div>
            <div className='offer__type'>
                <img src={imgAbroad} alt='offer_image' className='offer__img' />
                <div className='offer__course-desc'>
                    <h3 className='offer__desc-heading'>Angielski za granicą.</h3>
                    <p className='offer__desc-paragraph'>Wakacje w Anglii - nauka poprzez relaks w międzynarodowej grupie</p>
                    <div className='offer__button-div'>
                        <LinkElement
                            to='/offer/learn-abroad'
                            className='offer-a'
                            btn='offer__button'
                            btnText='angielski w anglii' arrowClassName='btn-arrow-right--active'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choice;
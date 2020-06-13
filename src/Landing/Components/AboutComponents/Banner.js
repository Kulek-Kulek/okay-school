import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.css';
import imgHand from '../../../images/picture-banner/hands.jpg';
import imgBusinessmen from '../../../images/picture-banner/businessmen-at-work.jpg';

const Banner = props => {
    return (
        <section data-section='two' className="picture-banner">
            <div className="picture-banner__imgWrapper">
                <img src={imgHand} alt="hands" className='picture-banner__img' />
                <div className='picture-banner__sloganButton'>
                    <h3 className='picture-banner__slogan'>Angielski z pasją</h3>
                    <Link to='/offer/general-english' className='picture-banner__a pulse'>
                        <span className="picture-banner__span">więcej<i className={`fas fa-long-arrow-alt-right btn-arrow-right--active`}></i></span>
                    </Link>
                </div>
            </div>
            <div className="picture-banner__imgWrapper">
                <img src={imgBusinessmen} alt="businessPeopleWorking" className='picture-banner__img' />
                <div className='picture-banner__sloganButton'>
                    <h3 className='picture-banner__slogan'>Angielski profesjonalnie</h3>
                    <Link to='/offer/business-english' className='picture-banner__a pulse'>
                        <span className="picture-banner__span">więcej<i className={`fas fa-long-arrow-alt-right btn-arrow-right--active`}></i></span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
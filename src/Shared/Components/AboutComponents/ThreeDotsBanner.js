import React from 'react';
import { Link } from 'react-router-dom';

import './ThreeDotsBanner.css';

const ThreeDotsBanner = props => {
    return (
        <section className="three-dots">
            <div className="three-dots__wrapper">
                <p className="three-dots__more">Chcę więcej
                <Link to='/offer' className="three-dots__a">
                        <span className="three-dots__dots">...</span>
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default ThreeDotsBanner;
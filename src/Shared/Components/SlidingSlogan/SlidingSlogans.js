import React from 'react';


import './SlidingSlogans.css';


const SlidingSlogans = props => {
    return (
        <div className='sliding-slogans'>
            <h2 className='sliding-slogans__single-slogan'>wybierz swój kurs<i className="fas fa-tasks sliding-slogans__icon"></i></h2>
            <h2 className='sliding-slogans__single-slogan'>Ucz się online<i className="fas fa-laptop sliding-slogans__icon"></i></h2>
            <h2 className='sliding-slogans__single-slogan'>postaw na rozwój<i className="fas fa-graduation-cap sliding-slogans__icon"></i></h2>
        </div>
    );
};

export default SlidingSlogans;
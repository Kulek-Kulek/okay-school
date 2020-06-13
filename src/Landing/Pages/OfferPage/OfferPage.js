import React from 'react';


import MainHeader from '../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../Shared/Components/Main/Main';
import Navigation from '../../../Shared/Components/Navigation/Navigation';
import SlidingSlogans from '../../../Shared/Components/SlidingSlogan/SlidingSlogans';
import Choice from '../../../Landing/Components/OfferComponents/Choice';
import Footer from '../../../Shared/Components/Footer/Footer';
import './OfferPage.css';

const OfferPage = props => {
    return (
        <React.Fragment>
            <MainHeader headerClassName='offer__header'>
                <Navigation navClassName='offer__navigation' />
                <SlidingSlogans />
            </MainHeader>
            <Main mainClassName='offer__main'>
                <Choice />
            </Main>
            <Footer />
        </React.Fragment>


    );
}

export default OfferPage;
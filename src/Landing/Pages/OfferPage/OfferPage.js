import React from 'react';


import MainHeader from '../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../Shared/Components/Main/Main';
import Navigation from '../../../Shared/Components/Navigation/Navigation';
import SlidingSlogans from '../../../Shared/Components/OfferComponents/SlidingSlogans';
import Choice from '../../../Shared/Components/OfferComponents/Choice';
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
        </React.Fragment>


    );
}

export default OfferPage;
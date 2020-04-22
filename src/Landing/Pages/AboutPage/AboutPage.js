import React from 'react';

import Main from '../../../Shared/Components/Main/Main';
import MainHeader from '../../../Shared/Components/MainHeader/MainHeader';
import Navigation from '../../../Shared/Components/Navigation/Navigation';
import Carousel from '../../../Shared/Components/Carousel/Carousel';
import LearnOnline from '../../../Shared/Components/AboutComponents/LearnOnline';
import OfferDescriptions from '../../../Shared/Components/AboutComponents/OfferDescriptions';
import Banner from '../../../Shared/Components/AboutComponents/Banner';
import ThreeDotsBanner from '../../../Shared/Components/AboutComponents/ThreeDotsBanner';
import OurClients from '../../../Shared/Components/AboutComponents/OurClients';
import Globe from '../../../Shared/Components/AboutComponents/Globe';



const AboutPage = props => {

    return (
        <React.Fragment>
            <MainHeader headerClassName='about__header'>
                <Navigation />
                <Carousel />
            </MainHeader>
            <Main>
                <OfferDescriptions />
                <LearnOnline />
                <Globe />
                <Banner />
                <ThreeDotsBanner />
                <OurClients />
            </Main>
        </React.Fragment>
    );
};

export default AboutPage;
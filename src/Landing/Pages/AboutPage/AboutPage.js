import React from 'react';

import Main from '../../../Shared/Components/Main/Main';
import MainHeader from '../../../Shared/Components/MainHeader/MainHeader';
import Navigation from '../../../Shared/Components/Navigation/Navigation';
import Carousel from '../../Components/AboutComponents/Carousel/Carousel';
import LearnOnline from '../../Components/AboutComponents/LearnOnline';
import OfferDescriptions from '../../Components/AboutComponents/OfferDescriptions';
import Banner from '../../Components/AboutComponents/Banner';
import ThreeDotsBanner from '../../Components/AboutComponents/ThreeDotsBanner';
import OurClients from '../../Components/AboutComponents/OurClients';
import Globe from '../../Components/AboutComponents/Globe';
import Footer from '../../../Shared/Components/Footer/Footer';


import './AboutPage.css';



const AboutPage = props => {

    return (
        <React.Fragment>
            <MainHeader headerClassName='about__header'>
                <Navigation navClassName='nav-desktop' />
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
            <Footer />
        </React.Fragment>
    );
};

export default AboutPage;
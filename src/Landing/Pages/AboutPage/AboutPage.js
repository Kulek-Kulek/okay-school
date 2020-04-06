import React from 'react';

import Main from '../../../Shared/Components/Main/Main';
import MainHeader from '../../../Shared/Components/MainHeader/MainHeader';
import LearnOnline from '../../../Shared/Components/AboutComponents/LearnOnline';
import OfferDescriptions from '../../../Shared/Components/AboutComponents/OfferDescriptions';
import Banner from '../../../Shared/Components/AboutComponents/Banner';
import ThreeDotsBanner from '../../../Shared/Components/AboutComponents/ThreeDotsBanner';
import OurClients from '../../../Shared/Components/AboutComponents/OurClients';
import Globe from '../../../Shared/Components/AboutComponents/Globe';
// import Footer from '../../../Shared/Components/Footer/Footer';


const AboutPage = props => {

    return (
        <React.Fragment>
            <MainHeader />
            <Main>
                <OfferDescriptions />
                <LearnOnline />
                <Globe />
                <Banner />
                <ThreeDotsBanner />
                <OurClients />

            </Main>
            {/* <Footer /> */}
        </React.Fragment>
    );
}

export default AboutPage;
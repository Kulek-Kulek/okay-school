import React from 'react';

import Main from '../../../Shared/Components/Main/Main';
import MainHeader from '../../../Shared/Components/MainHeader/MainHeader';
import OfferDescriptions from '../../../Shared/Components/AboutComponents/OfferDescriptions';
import Banner from '../../../Shared/Components/AboutComponents/Banner';
import ThreeDotsBanner from '../../../Shared/Components/AboutComponents/ThreeDotsBanner';

const AboutPage = props => {



    return (
        <React.Fragment>
            <MainHeader />
            <Main>
                <OfferDescriptions />
                <Banner />
                <ThreeDotsBanner />
            </Main>
        </React.Fragment>
    );
}

export default AboutPage;
import React, { useContext } from 'react';


import Header from '../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../Shared/Components/Main/Main';
import Navigation from '../../../Shared/Components/Navigation/Navigation';
import UserNotLoggedin from '../../Components/PartnersComponents/UserNotLoggedin';
import { AuthContex } from '../../../Shared/Contex/auth-contex';
import videoBanner from '../../../videos/video.mp4';



const PartnersPage = props => {
    // const authModalActivator = useContext(ModalContex);
    const auth = useContext(AuthContex);

    let main = (
        <div>I AM PARTNERS logged</div>
    );

    if (!auth.isLoggedIn) {
        main = (<UserNotLoggedin
            videoClass='partners__video'
            videoSrc={videoBanner} />)
    }


    return (
        <React.Fragment>
            <Header>
                <Navigation />
            </Header>
            <Main>
                {main}
            </Main>
        </React.Fragment>
    );
};

export default PartnersPage;
import React, { useContext } from 'react';


import Header from '../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../Shared/Components/Main/Main';
import Navigation from '../../../Shared/Components/Navigation/Navigation';
import UserNotLoggedin from '../../Components/Students/UserNotLoggedin';
import { AuthContex } from '../../../Shared/Contex/auth-contex';
import videoBanner from '../../../videos/video.mp4';

import './StudentPage.css';



const PartnersPage = props => {
    // const authModalActivator = useContext(ModalContex);
    const auth = useContext(AuthContex);

    let main = (
        <div>I AM PARTNERS logged</div>
    );

    // if (!auth.isLoggedIn) {
    //     main = (<UserNotLoggedin
    //         videoClass='partners__video'
    //         videoSrc={videoBanner} />)
    // }


    return (
        <React.Fragment>
            <Header>
                <Navigation />
                {/* <StudentDashboard /> */}
            </Header>
            <Main mainClassName='user-main'>
                {main}
            </Main>
        </React.Fragment>
    );
};

export default PartnersPage;
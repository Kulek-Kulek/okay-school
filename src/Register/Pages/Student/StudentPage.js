import React, { useContext, useEffect } from 'react';


import Header from '../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../Shared/Components/Main/Main';
import Navigation from '../../../Shared/Components/Navigation/Navigation';
import StudentDashboard from '../../Components/Students/StudentDashboard';
import StudentInfoType from '../../Components/Students/StudentInfoType';
// import UserNotLoggedin from '../../Components/Students/UserNotLoggedin';
import { AuthContex } from '../../../Shared/Contex/auth-contex';
import { changeActiveStudentInfoType } from '../../Components/Students/changeActiveStudentInfoType';

import './StudentPage.css';



const PartnersPage = props => {
    // const authModalActivator = useContext(ModalContex);
    const auth = useContext(AuthContex);

    useEffect(() => {
        changeActiveStudentInfoType();
    }, []);

    // if (!auth.isLoggedIn) {
    //     main = (<UserNotLoggedin
    //         videoClass='partners__video'
    //         videoSrc={videoBanner} />)
    // }


    return (
        <React.Fragment>
            <Header>
                <Navigation />
            </Header>
            <Main mainClassName='user-main'>
                <StudentDashboard />
                <StudentInfoType />
            </Main>
        </React.Fragment>
    );
};

export default PartnersPage;
import React, { useEffect } from 'react';

import Navigation from '../../../Shared/Components/Navigation/Navigation';
import Header from '../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../Shared/Components/Main/Main';
import AdminPanel from '../../Components/Admin/AdminPanel/AdminPanel';
import GeneralInfo from '../../Components/Admin/GeneralInfo/GeneralInfo';
import { navigationToggle } from '../../../Shared/Components/Navigation/navigationToggle';
import './AdminWelcomePage.css';

const WelcomePage = props => {

    useEffect(() => {
        navigationToggle();
    }, []);

    return (
        <React.Fragment>
            <Header headerClassName='admin-header'>
                <Navigation />
                <AdminPanel />
            </Header>
            <Main mainClassName='admin-main'>
                <GeneralInfo />
            </Main>
        </React.Fragment>
    );
}

export default WelcomePage;
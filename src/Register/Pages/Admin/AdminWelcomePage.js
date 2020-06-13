import React, { useState } from 'react';

import Navigation from '../../../Shared/Components/Navigation/Navigation';
import Header from '../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../Shared/Components/Main/Main';
import AdminPanel from '../../Components/AdminPanel/AdminPanel';
import GeneralInfo from '../../Components/GeneralInfo/GeneralInfo';
import './AdminWelcomePage.css';

const WelcomePage = props => {

    const [infoType, setInfoType] = useState();

    const [newDataLoaded, setNewDataLoaded] = useState(false);

    const infoTypeHandler = (buttonClicked) => {
        setInfoType(buttonClicked);
    }

    const dataLoaded = (dataLoaded) => {
        setNewDataLoaded(dataLoaded);
    }

    return (
        <React.Fragment>
            <Header headerClassName='admin-header'>
                <Navigation />
                <AdminPanel infoTypeHandler={infoTypeHandler} dataLoaded={dataLoaded} />
            </Header>
            <Main mainClassName='admin-main'>
                <GeneralInfo infoType={infoType} newDataLoaded={newDataLoaded} />
            </Main>
        </React.Fragment>
    );
}

export default WelcomePage;
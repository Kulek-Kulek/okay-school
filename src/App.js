import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import WelcomePage from './Landing/Pages/welcomePage/WelcomePage';
import AboutPage from './Landing/Pages/AboutPage/AboutPage';
import OfferPage from './Landing/Pages/OfferPage/OfferPage';
import AuthModal from './Shared/Components/Modal/AuthModal';
import Backdrop from './Shared/Components/Backdrop/Backdrop';
import GeneralEnglish from './Landing/Pages/GeneralEnglish/GeneralEnglish';
import BusinessEnglish from './Landing/Pages/BusinessEnglish/BusinessEnglish';
import LearnAbroad from './Landing/Pages/LearnAbroad/LearnAbroad';
import Basket from './Landing/Pages/Basket/Basket';
import { AuthContex } from './Shared/Contex/auth-contex';

import './App.css';

const App = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authModal = useSelector(state => state.modal.authModal);
  const contactModal = useSelector(state => state.modal.contactModal);
  const dataAdminModal = useSelector(state => state.modal.dataAdminModal);
  const addAdminModal = useSelector(state => state.modal.addAdminModal);
  const errorModalActivator = useSelector(state => state.adminData.errorModalActivator);


  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContex.Provider value={
      {
        isLoggedIn,
        login,
        logout,
      }
    }>

      <Router>
        <AuthModal />
        {(authModal || contactModal || dataAdminModal || addAdminModal || errorModalActivator) && <Backdrop />}
        <Switch>
          <Route path='/' exact>
            <WelcomePage />
          </Route>
          <Route path='/about' exact>
            <AboutPage />
          </Route>
          <Route path='/offer' exact>
            <OfferPage />
          </Route>
          <Route path='/offer/general-english' exact>
            <GeneralEnglish />
          </Route>
          <Route path='/offer/business-english' exact>
            <BusinessEnglish />
          </Route>
          <Route path='/offer/learn-abroad' exact>
            <LearnAbroad />
          </Route>
          <Route path='/basket' exact>
            <Basket />
          </Route>
          <Redirect to='/' exact />
        </Switch>
      </Router >

    </AuthContex.Provider >
  );
};

export default App;

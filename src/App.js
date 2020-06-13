import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import WelcomePage from './Landing/Pages/welcomePage/WelcomePage';
import AboutPage from './Landing/Pages/AboutPage/AboutPage';
import OfferPage from './Landing/Pages/OfferPage/OfferPage';
import PartnersPage from './Landing/Pages/PartnersPage/PartnersPage';
import AuthModal from './Shared/Components/Modal/AuthModal';
import Backdrop from './Shared/Components/Backdrop/Backdrop';
import GeneralEnglish from './Landing/Pages/GeneralEnglish/GeneralEnglish';
import BusinessEnglish from './Landing/Pages/BusinessEnglish/BusinessEnglish';
import LearnAbroad from './Landing/Pages/LearnAbroad/LearnAbroad';
import AdminWelcomePage from './Register/Pages/Admin/AdminWelcomePage';
import './App.css';
import { AuthContex } from './Shared/Contex/auth-contex';
import { ModalContex } from './Shared/Contex/modal-contex';


const App = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [contactModalActive, setContactModalActive] = useState(false);
  const [authModalActive, setAuthModalActive] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const modalToggle = useCallback((buttonType) => {

    switch (buttonType) {
      case 'contactModalButton':
        return setContactModalActive(prevState => !prevState);
      case 'cancelContactModalButton':
        return setContactModalActive(prevState => !prevState);
      case 'loginModalButton':
        return setAuthModalActive(prevState => !prevState);
      default: return buttonType
    }
  }, []);


  return (
    <AuthContex.Provider value={
      {
        isLoggedIn,
        login,
        logout,
      }
    }>
      <ModalContex.Provider value={
        {
          contactModalActive,
          authModalActive,
          modalToggle
        }
      }>
        <Router>
          {authModalActive && <AuthModal />}
          {authModalActive && <Backdrop />}
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
            <Route path='/partners' exact>
              <PartnersPage />
            </Route>
            <Route path='/register/admin' exact>
              <AdminWelcomePage />
            </Route>
            <Redirect to='/' exact />
          </Switch>
        </Router>
      </ModalContex.Provider>
    </AuthContex.Provider>
  );
};

export default App;

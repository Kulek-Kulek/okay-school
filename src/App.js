import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import WelcomePage from './Landing/Pages/welcomePage/WelcomePage';
import AboutPage from './Landing/Pages/AboutPage/AboutPage';
import OfferPage from './Landing/Pages/OfferPage/OfferPage';
import PartnersPage from './Landing/Pages/PartnersPage/PartnersPage';
import Footer from './Shared/Components/Footer/Footer';
import AuthModal from './Shared/Components/Modal/AuthModal';
import Backdrop from './Shared/Components/Backdrop/Backdrop';
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


  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <WelcomePage />
        </Route>
        <Route path='/about' exact>
          <AboutPage />
          <Footer />
        </Route>
        <Route path='/offer' exact>
          <OfferPage />
          <Footer />
        </Route>
        <Route path='/partners' exact>
          <PartnersPage />
          <Footer />
        </Route>
        {/* <Route path='/auth' exact>
          <Auth />
        </Route> */}
        <Redirect to='/' exact />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <WelcomePage />
        </Route>
        <Route path='/about' exact>
          <AboutPage />
          <Footer />
        </Route>
        <Route path='/offer' exact>
          <OfferPage />
          <Footer />
        </Route>
        {/* <Route path='/auth' exact>
          <Auth />
        </Route> */}
        <Route path='/partners' exact>
          <PartnersPage />
        </Route>
        <Redirect to='/' exact />
      </Switch>
    );
  };

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
          {authModalActive && <Backdrop click={() => modalToggle('loginModalButton')} />}
          {routes}
        </Router>
      </ModalContex.Provider>
    </AuthContex.Provider>
  );
};

export default App;

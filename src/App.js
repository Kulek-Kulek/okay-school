import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import WelcomePage from './Landing/Pages/welcomePage/WelcomePage';
import AboutPage from './Landing/Pages/AboutPage/AboutPage';
import OfferPage from './Landing/Pages/OfferPage/OfferPage';
import PartnersPage from './Landing/Pages/PartnersPage/PartnersPage';
import Navigation from './Shared/Components/Navigation/Navigation';
import Footer from './Shared/Components/Footer/Footer';
import './App.css';


const App = () => {

  const routes = (
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
      <Route path='/partners' exact>
        <PartnersPage />
      </Route>
      <Redirect to='/' exact />
    </Switch>
  );

  return (
    <Router>
      <Navigation />
      {routes}
      <Footer />
    </Router>
  );
}

export default App;

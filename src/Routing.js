import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Game from './views/Game';
import NotFound from './views/NotFound';

const Routing = () => (
  <Router>
    <Header/>
    <Switch>
      <Route exact path="/"><Game/></Route>
      <Route path="*"><NotFound/></Route>
    </Switch>
    <Footer/>
  </Router>
)

export default Routing;
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Game from './views/Game';
import NotFound from './views/NotFound';

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/"><Game/></Route>
      <Route path="*"><NotFound/></Route>
    </Switch>
  </Router>
)

export default Routing;
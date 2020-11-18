import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common.css';
import Routing from './Routing';
 
ReactDOM.render(
  <Routing/>,
  document.getElementById('app')
);
 
module.hot.accept();
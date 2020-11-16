import React from 'react';
import ReactDOM from 'react-dom';
 
import Routing from './Routing';
 
const title = 'React with Webpack and Babel';
 
ReactDOM.render(
  <Routing title={title} />,
  document.getElementById('app')
);
 
module.hot.accept();
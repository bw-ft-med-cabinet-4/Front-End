// react
import React from 'react';
import ReactDOM from 'react-dom';
// router
import { BrowserRouter as Router } from 'react-router-dom';
// app
import App from './App';
// global style injections
// import Reset from './styles/Reset';


ReactDOM.render(
  <Router>
    {/* <Reset /> */}
    <App />
  </Router>,
  document.getElementById('root')
);

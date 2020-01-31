import React from 'react';

import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';

import { Home } from './pages';

import Logo from '../img/logo.svg';

const App = () => (
  <div className="wrapper">
    <Helmet>
      <title>Django + REST - Todo List</title>
    </Helmet>
    <div className="header">
      <h1>
        <img src={Logo} width="34" /> TODO List
      </h1>
    </div>
    <Home />
  </div>
);

export default hot(module)(App);

import React from 'react';

import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';

import { Home } from './pages';

const App = () => (
  <div className="wrapper">
    <Helmet>
      <title>Django + REST - Todo List</title>
    </Helmet>
    <div className="header">
      <h1>
        <img src="/static/images/logo.svg" width="34" /> TODO List
      </h1>
    </div>
    <Home />
  </div>
);

export default hot(module)(App);

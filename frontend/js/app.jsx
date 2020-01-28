import React from 'react';

import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';

import { Home } from './pages';

const App = () => (
  <div className="wrapper">
    <Helmet>
      <title>Django + REST - Todo List</title>
    </Helmet>
    <h1>📔 TODO List</h1>
    <Home />
  </div>
);

export default hot(module)(App);

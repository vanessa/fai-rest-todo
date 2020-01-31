import React from 'react';

import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';

import Api from 'utils/api';
import Context from 'utils/context';

import { Home } from './pages';
import Logo from '../img/logo.svg';

const App = () => {
  // Estado global da aplicação
  const [state, setState] = React.useState({ user: undefined });

  React.useEffect(() => {
    Api.me().then((data) => setState({ user: data }));
  });

  return (
    <Context.Provider value={state}>
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
    </Context.Provider>
  );
};

export default hot(module)(App);

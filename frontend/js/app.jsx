import React from 'react';

import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';

const App = () => (
  <div>
    <Helmet>
      <title>Django + REST - Todo List</title>
    </Helmet>
  </div>
);

export default hot(module)(App);

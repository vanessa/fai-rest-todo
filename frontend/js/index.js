import '../sass/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const container = document.getElementById('react-app');

if (container) {
  ReactDOM.render(<App />, container);
}


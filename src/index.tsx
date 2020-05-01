import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Site from 'views/Site/Site';

render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>,
  document.getElementById('app')
);
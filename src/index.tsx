import React from 'react';
import { render } from 'react-dom';

import Site from 'views/Site/Site';

import './variables.scss';
import './index.scss';

render(
    <React.StrictMode>
        <Site />
    </React.StrictMode>,
    document.getElementById('app'),
);

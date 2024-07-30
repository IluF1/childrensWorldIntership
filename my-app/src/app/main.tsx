import React from 'react';

// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/order
import './assets/styles/index.css';

import {Provider} from 'react-redux';

import {ReactRouter} from './router';

import {Store} from '@/app/store';
import {Header} from '@/shared';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={Store}>
            <Header />
            <ReactRouter />
        </Provider>
    </React.StrictMode>,
);

import React from 'react';

// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';

import { Provider } from 'react-redux';

import { Store } from '@/app/store';
import { Header } from '@/features/layout/header/view';

import { ReactRouter } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Header />
      <ReactRouter />
    </Provider>
  </React.StrictMode>,
);

import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { RouterProvider } from 'react-router-dom';

import { Header } from '@/features/layout/header/view';

import { Router } from './router';

// eslint-disable-next-line import/order
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from '@/features/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Header />
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>,
);

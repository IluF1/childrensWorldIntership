import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { RouterProvider } from 'react-router-dom';

import { Header } from '@/features/layout/header/view';

import { Router } from './router';

// eslint-disable-next-line import/order
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={Router} />
  </React.StrictMode>,
);

import { createBrowserRouter } from 'react-router-dom';

import { Home } from '@/pages/home/home';
import { Orders } from '@/pages/orders/orders';
import { ProductPage } from '@/pages/productPage/productPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
]);

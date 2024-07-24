import { createBrowserRouter } from 'react-router-dom';

import { Home } from '@/pages/home/view';
import { Orders } from '@/pages/orders/view';
import { ProductPage } from '@/pages/productPage/view';

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

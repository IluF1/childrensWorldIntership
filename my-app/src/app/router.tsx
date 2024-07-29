import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useAppDispatch } from '@/app/store';
import { fetchCartData } from '@/entities/cart/model/api/api';
import { Home } from '@/pages/home/view';
import { ProductPage } from '@/pages/productPage/view';

export function ReactRouter() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

import { useEffect } from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { fetchCartData } from '@/features/Api/Api'
import { ErrorPage } from '@/pages/Error/Error'
import { Home } from '@/pages/Home/Home'
import { Orders } from '@/pages/Orders/Orders'
import { ProductPage } from '@/pages/ProductPage/ProductPage'
import { useAppDispatch, useAppSelector } from '@/shared'

export function ReactRouter() {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(state => state.cart.amount)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [cart])

  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

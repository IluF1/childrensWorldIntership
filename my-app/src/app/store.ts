import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { cartReducer } from '@/features/Slices/Cart.slice'
import { ordersReducer } from '@/features/Slices/Orders.slice'
import { productsReducer } from '@/features/Slices/Products.slice'

const rootReducer = combineReducers({
  cart: cartReducer,
  orders: ordersReducer,
  products: productsReducer,
})

export const Store = configureStore({
  reducer: rootReducer,
})

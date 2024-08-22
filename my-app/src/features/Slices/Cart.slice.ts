import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { fetchCartData, updateCart } from '../Api/Api'
import type { ICartData } from '@/shared'

export interface IInitialState {
  cart: ICartData[]
  amount: number
  totalPrice: number
}

const initialState: IInitialState = {
  cart: [],
  amount: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementQuantityItem: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(
        product => product.product.id === action.payload,
      )
      if (item) {
        item.quantity++
      }
    },
    decrementQuantityItem: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(
        product => product.product.id === action.payload,
      )
      if (item && item.quantity > 0) {
        item.quantity--
      }
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCartData.fulfilled,
        (state, action: PayloadAction<ICartData[]>) => {
          state.cart = action.payload
          state.amount = state.cart.length
          state.totalPrice = state.cart.reduce((acc, item) => {
            return acc + Number(item.product.price) * (item.quantity || 1)
          }, 0)
        },
      )
      .addCase(fetchCartData.rejected, (_state, action) => {
        console.error('Ошибка при загрузке данных корзины:', action.payload)
      })
      .addCase(
        updateCart.fulfilled,
        (state, action: PayloadAction<ICartData[]>) => {
          state.cart = action.payload
          state.amount = state.cart.length
          state.totalPrice = state.cart.reduce((acc, item) => {
            return acc + Number(item.product.price) * (item.quantity || 1)
          }, 0)
        },
      )
  },
})

export const { incrementQuantityItem, decrementQuantityItem, setTotalPrice }
  = cartSlice.actions
export const cartReducer = cartSlice.reducer

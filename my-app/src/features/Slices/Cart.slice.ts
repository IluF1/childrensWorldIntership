import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { ICartData } from '../../widgets/Cart/model/helpers/interfaces'
import { fetchCartData, updateCart } from '../Api/Api'

export interface IInitialState {
  cart: ICartData[]
  amount: number
}

const initialState: IInitialState = {
  cart: [],
  amount: 0,
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
      if (item && item.quantity !== 0) {
        item.quantity--
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCartData.fulfilled,
        (state, action: PayloadAction<ICartData[]>) => {
          state.cart = action.payload
          state.amount = state.cart.length
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
        },
      )
  },
})

export const { incrementQuantityItem, decrementQuantityItem }
  = cartSlice.actions
export const cartReducer = cartSlice.reducer

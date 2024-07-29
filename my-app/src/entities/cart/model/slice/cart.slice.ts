import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCartData, updateCart } from '@/entities/cart/model/api/api';
import { ICartData } from '@/entities/cart/model/interfaces';

export interface IInitialState {
  cart: ICartData[];
  amount: number;
}

const initialState: IInitialState = {
  cart: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartData>) => {
      const itemExists = state.cart.find(
        item => item.product.id === action.payload.product.id,
      );
      if (itemExists) {
        itemExists.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
      state.amount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    setCart: (state, action: PayloadAction<ICartData[]>) => {
      state.cart = action.payload;
      state.amount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchCartData.fulfilled,
        (state, action: PayloadAction<ICartData[]>) => {
          state.cart = action.payload;
          state.amount = state.cart.reduce(
            (acc, item) => acc + item.quantity,
            0,
          );
        },
      )
      .addCase(fetchCartData.rejected, (_state, action) => {
        console.error('Ошибка при загрузке данных корзины:', action.payload);
      })
      .addCase(
        updateCart.fulfilled,
        (state, action: PayloadAction<ICartData[]>) => {
          state.cart = action.payload;
          state.amount = state.cart.reduce(
            (acc, item) => acc + item.quantity,
            0,
          );
        },
      )
      .addCase(updateCart.rejected, (_state, action) => {
        console.error('Ошибка при обновлении корзины:', action.payload);
      });
  },
});

export const { addItem, setCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

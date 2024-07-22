import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { ICartData } from '@/utils/hooks/interfaces/interfaces';

// Явное указание типа для ответа с сервера
interface ICartResponse {
  data: ICartData[];
}

// Асинхронное действие для получения данных корзины
export const fetchCart = createAsyncThunk<ICartData[]>(
  'cart/fetchCart',
  async () => {
    const response = await axios.get<ICartResponse>(
      'https://skillfactory-task.detmir.team/cart',
    );
    return response.data;
  },
);

interface IInitialState {
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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchCart.fulfilled,
      (state, action: PayloadAction<ICartData[]>) => {
        state.cart = action.payload;
        state.amount = action.payload.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0,
        );
      },
    );
  },
});

export const cartReducer = cartSlice.reducer;

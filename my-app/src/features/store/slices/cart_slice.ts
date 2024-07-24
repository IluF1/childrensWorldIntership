import { createSlice } from '@reduxjs/toolkit';

import { ICartData } from '@/feautures/utils/hooks/interfaces/interfaces';

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
});

export const cartReducer = cartSlice.reducer;

import { ICartData } from '@/entities/cart/components/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addItemToCart, fetchDataCart } from '../api';

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
      addItemToCart.fulfilled,
      (state, action: PayloadAction<ICartData>) => {
        state.cart.push(action.payload);
        state.amount += 1;
      },
    );
    builder.addCase(addItemToCart.rejected, (_state, action) => {
      console.error('Ошибка при добавлении товара в корзину:', action.payload);
      alert(`Ошибка: ${JSON.stringify(action.payload)}`);
    });

    builder.addCase(
      fetchDataCart.fulfilled,
      (state, action: PayloadAction<ICartData[]>) => {
        state.cart = action.payload;
        state.amount = action.payload.length;
      },
    );
    builder.addCase(fetchDataCart.rejected, (_state, action) => {
      console.error('Ошибка при загрузке товаров:', action.payload);
    });
  },
});

export const cartReducer = cartSlice.reducer;
export { addItemToCart, fetchDataCart };


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCartData, addItemToCart } from '../api/api';
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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchCartData.fulfilled,
      (state, action: PayloadAction<ICartData[]>) => {
        state.cart = action.payload;
        state.amount = action.payload.length;
      },
    );
    builder.addCase(fetchCartData.rejected, (_state, action) => {
      console.error('Error loading cart data:', action.payload);
    });

    builder.addCase(
      addItemToCart.fulfilled,
      (state, action: PayloadAction<ICartData[] | undefined>) => {
        if (action.payload) {
          // Обновите состояние корзины, добавив новые элементы
          const newItems = action.payload;
          newItems.forEach(addedItem => {
            const existingItemIndex = state.cart.findIndex(
              item => item.product.id === addedItem.product.id,
            );

            if (existingItemIndex !== -1) {
              // Если элемент уже существует, обновите количество
              state.cart[existingItemIndex].quantity += addedItem.quantity;
            } else {
              // Если элемент новый, добавьте его
              state.cart.push(addedItem);
            }
          });

          // Пересчитать количество элементов в корзине
          state.amount = state.cart.length;
        } else {
          console.error('Empty payload or unexpected format:', action.payload);
        }
      },
    );
    builder.addCase(addItemToCart.rejected, (_state, action) => {
      console.error('Error adding item to cart:', action.payload);
    });
  },
});

export const cartReducer = cartSlice.reducer;

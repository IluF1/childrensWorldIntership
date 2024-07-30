import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ICartData } from '../interfaces';

export const fetchCartData = createAsyncThunk<
  ICartData[],
  void,
  { rejectValue: string }
>('cart/fetchData', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      'https://skillfactory-task.detmir.team/cart',
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных корзины:', error);
    return rejectWithValue('Не удалось получить данные корзины');
  }
});

export const updateCart = createAsyncThunk<
  ICartData[],
  ICartData[],
  { rejectValue: string }
>('cart/updateCart', async (cartItems, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      'https://skillfactory-task.detmir.team/cart/update',
      {
        data: cartItems.map(item => ({
          id: item.product.id,
          quantity: item.quantity,
        })),
      },
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при обновлении корзины:', error);
    return rejectWithValue('Не удалось обновить корзину');
  }
});

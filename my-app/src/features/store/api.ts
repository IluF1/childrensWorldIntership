import { ICartData } from '@/entities/cart/components/interfaces';
import { IData } from '@/features/utils/interfaces/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

type ThunkApiConfig = {
  rejectValue: string;
};

export const fetchDataCart = createAsyncThunk<
  ICartData[],
  void,
  ThunkApiConfig
>('cart/data', async (_, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<ICartData[]> = await axios.get(
      'https://skillfactory-task.detmir.team/cart',
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data || 'Произошла ошибка при загрузке товаров',
    );
  }
});

export const addItemToCart = createAsyncThunk<any, IData, ThunkApiConfig>(
  'cart/addItemToCart',
  async (item: IData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://skillfactory-task.detmir.team/cart/update',
        item,
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data ||
          'Произошла ошибка при добавлении товара в корзину',
      );
    }
  },
);

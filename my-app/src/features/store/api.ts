import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICartData } from '@/entities/cart/model/interfaces';
import { IData } from '@/shared';

export const fetchCartData = createAsyncThunk<ICartData[]>(
  'cart/data',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://skillfactory-task.detmir.team/cart',
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching cart data:', error);
      return rejectWithValue('Failed to fetch cart data');
    }
  },
);

export const addItemToCart = createAsyncThunk<ICartData[] | undefined, IData>(
  'cart/add',
  async (item: IData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://skillfactory-task.detmir.team/cart/update',
        {
          data: [
            {
              id: item.data.id,
              quantity: 1,
            },
          ],
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      return rejectWithValue('Failed to add item to cart');
    }
  },
);

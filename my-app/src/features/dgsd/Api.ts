import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ICartData } from '@/shared'
import { baseUrl, instance } from '@/shared'

export const fetchCartData = createAsyncThunk<ICartData[], void, { rejectValue: string }>(
  'cart/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(`${baseUrl}cart`)
      return response.data
    }
    catch (error) {
      console.error('Ошибка при получении данных корзины:', error)
      return rejectWithValue('Не удалось получить данные корзины')
    }
  },
)

export const updateCart = createAsyncThunk<ICartData[], ICartData[], { rejectValue: string }>(
  'cart/updateCart',
  async (cartItems, { rejectWithValue }) => {
    try {
      const response = await instance.post(`${baseUrl}cart/update`, {
        data: cartItems.map(item => ({
          id: item.product.id,
          quantity: item.quantity,
        })),
      })
      return response.data
    }
    catch (error) {
      console.error('Ошибка при обновлении корзины:', error)
      return rejectWithValue('Не удалось обновить корзину')
    }
  },
)

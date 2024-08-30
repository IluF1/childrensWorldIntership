import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ICartData, IProduct } from '@/shared'
import { instance } from '@/shared'

interface Product {
  id: string
  category: string
  picture: string
  price: number
}

export interface OrderItem {
  quantity: number
  createdAt: string
  product: Product
}

export interface IOrdersResponse {
  data: OrderItem[][]
  meta: {
    total: number
  }
}

export interface IProducts {
  data: IProduct[]
  meta: {
    total: number
  }
}
export const fetchCartData = createAsyncThunk<
  ICartData[],
  void,
  { rejectValue: string }
>('cart/fetchData', async (_, { rejectWithValue }) => {
  try {
    const response = await instance.get('/cart')
    return response.data
  }
  catch (error) {
    console.error('Ошибка при получении данных корзины:', error)
    return rejectWithValue('Не удалось получить данные корзины')
  }
})

export const updateCart = createAsyncThunk<
  ICartData[],
  ICartData[],
  { rejectValue: string }
>('cart/updateCart', async (cartItems, { rejectWithValue }) => {
  try {
    const response = await instance.post('/cart/update', {
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
})
export const fetchOrders = createAsyncThunk<
  IOrdersResponse,
  number,
  { rejectValue: string }
>('orders/fetchData', async (page, { rejectWithValue }) => {
  try {
    const response = await instance.get<IOrdersResponse>(
      `/orders?limit=10&page=${page}`,
    )
    return response.data
  }
  catch (error) {
    console.error('Ошибка при получение заказов:', error)
    return rejectWithValue('Не удалось получить заказы')
  }
})

export const fetchProducts = createAsyncThunk<
  IProducts,
  number,
  { rejectValue: string }
>('products/getAllProducts', async (page, { rejectWithValue }) => {
  try {
    const response = await instance.get<IProducts>(
      `/products?limit=15&page=${page}`,
    )
    return response.data
  }
  catch (error) {
    console.error('Ошибка при получение заказов:', error)
    return rejectWithValue('Не удалось получить заказы')
  }
})
export const updateCartItemQuantity = createAsyncThunk<
  ICartData[],
  { productId: string, quantity: number },
  { rejectValue: string }
>(
  'cart/updateCartItemQuantity',
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await instance.post('/cart/update', {
        data: [{ id: productId, quantity }],
      })
      return response.data
    }
    catch (error) {
      console.error('Ошибка при обновлении количества товара:', error)
      return rejectWithValue('Не удалось обновить количество товара')
    }
  },
)

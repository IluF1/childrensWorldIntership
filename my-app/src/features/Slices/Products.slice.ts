import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { type IProducts, fetchProducts } from '../Api/Api'
import type { IProduct } from '@/shared'

export interface IInitialState {
  products: IProduct[]
  total: number
}

const initialState: IInitialState = {
  products: [],
  total: 0,
}

export const Products = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProducts>) => {
      state.products = action.payload.data
      state.total = action.payload.meta.total
    })
    builder.addCase(fetchProducts.rejected, (_state, action) => {
      console.error('Ошибка, при загрузке товаров', action.payload)
    })
  },
})

export const productsReducer = Products.reducer

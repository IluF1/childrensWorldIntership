import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { IOrdersResponse, OrderItem } from '../Api/Api'
import { fetchOrders } from '../Api/Api'

export interface IInitialState {
  orders: OrderItem[][]
  total: number
}

const initialState: IInitialState = {
  orders: [],
  total: 0,
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchOrders.fulfilled,
      (state, action: PayloadAction<IOrdersResponse>) => {
        state.orders = action.payload.data
        state.total = action.payload.meta.total
      },
    )
    builder.addCase(fetchOrders.rejected, (_state, action) => {
      console.error('Ошибка, при загрузке товаров', action.payload)
    })
  },
})

export const ordersReducer = ordersSlice.reducer

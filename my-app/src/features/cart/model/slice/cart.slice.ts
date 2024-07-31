import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {fetchCartData, updateCart} from '../api/api';
import {ICartData} from '../interfaces';

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
    reducers: {
        addItem: (state, action: PayloadAction<ICartData>) => {
            const existingItem = state.cart.find(
                (item) => item.product.id === action.payload.product.id,
            );
            if (!existingItem) {
                state.cart.push(action.payload);
            }
            state.amount = state.cart.length;
        },

        removeItem: (state, action: PayloadAction<ICartData>) => {
            // eslint-disable-next-line no-param-reassign
            state.cart = state.cart.filter((item) => item.product.id !== action.payload.product.id);
            state.amount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartData.fulfilled, (state, action: PayloadAction<ICartData[]>) => {
                state.cart = action.payload;
                state.amount = state.cart.length;
            })
            .addCase(fetchCartData.rejected, (_state, action) => {
                console.error('Ошибка при загрузке данных корзины:', action.payload);
            })
            .addCase(updateCart.fulfilled, (state, action: PayloadAction<ICartData[]>) => {
                state.cart = action.payload;
                state.amount = state.cart.length;
            })
            .addCase(updateCart.rejected, (_state, action) => {
                console.error('Ошибка при обновлении корзины:', action.payload);
            });
    },
});

export const {addItem, removeItem} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

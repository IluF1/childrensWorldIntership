import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {cartReducer} from '@/features/Slice/cart.slice';
const rootReducer = combineReducers({
    cart: cartReducer,
});

export const Store = configureStore({
    reducer: rootReducer,
});

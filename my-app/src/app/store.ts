import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {cartReducer} from '@/features/Slices/Cart.slice';

const rootReducer = combineReducers({
    cart: cartReducer,
});

export const Store = configureStore({
    reducer: rootReducer,
});

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cartReducer } from './slices/cart.slice';

const rootReducer = combineReducers(
  {
    cart: cartReducer
  }
)

export const Store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof Store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

import {useDispatch} from 'react-redux';

import {Store} from '@/app/store';

export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {Store} from '@/app/store';

export type RootState = ReturnType<typeof Store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

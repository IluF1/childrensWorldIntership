import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

import type { Store } from '@/app/store'

export type RootState = ReturnType<typeof Store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

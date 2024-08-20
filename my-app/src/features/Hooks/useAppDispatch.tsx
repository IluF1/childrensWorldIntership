import { useDispatch } from 'react-redux'

import type { Store } from '@/app/store'

export type AppDispatch = typeof Store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

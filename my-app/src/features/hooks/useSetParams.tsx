import { useEffect } from 'react'

import { currentUrl } from '@/shared'

export function useSetParam(name: string, value: string) {
  useEffect(() => {
    currentUrl.searchParams.set(name, value)
    history.pushState({}, '', currentUrl)
  }, [value])
}

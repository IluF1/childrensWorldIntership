import { currentUrl } from '@/shared';
import { useEffect } from 'react';


export const useSetParam = (name: string, value: string) => {
  useEffect(() => {
    currentUrl.searchParams.set(name, String(value));
    history.pushState({}, '', currentUrl);
  }, [value]);
};

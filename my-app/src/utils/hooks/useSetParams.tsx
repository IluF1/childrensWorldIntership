import { useEffect } from 'react';
import { currentUrl } from '../constants/constants';

export const useSetParam = (name: string, value: string) => {
    useEffect(() => {
        currentUrl.searchParams.set(name, String(value));
        history.pushState({}, '', currentUrl);
    }, [value]);
};

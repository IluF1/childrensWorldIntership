import {useEffect, useState} from 'react';

import {IProduct, baseUrl, instance} from '@/shared';

export const useGetProductById = (id: number) => {
    const url = `${baseUrl}products/${id}`;
    const [card, setCard] = useState<IProduct>();
    useEffect(() => {
        instance.get(url).then((res) => setCard(res.data));
    }, [url]);

    return {card};
};

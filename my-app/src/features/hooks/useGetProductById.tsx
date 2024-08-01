import {useEffect, useState} from 'react';

import axios from 'axios';

import {IProduct} from '@/shared';

export const useGetProductById = (id: number) => {
    const url = `https://skillfactory-task.detmir.team/products/${id}`;
    const [card, setCard] = useState<IProduct>();
    useEffect(() => {
        axios.get(url).then((res) => setCard(res.data));
    }, [url]);

    return {card};
};

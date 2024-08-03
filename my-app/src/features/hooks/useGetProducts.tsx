import {useEffect, useState} from 'react';

import {IProduct, baseUrl, instance} from '@/shared';

export const useGetProducts = (page: number) => {
    const url = `${baseUrl}products?page=${page}&limit=15`;
    const [data, setData] = useState<IProduct[]>([]);

    useEffect(() => {
        instance.get(url).then((res) => setData(res.data.data));
    }, [page]);

    return {data};
};

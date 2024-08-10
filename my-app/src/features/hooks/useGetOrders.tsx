import {useEffect, useState} from 'react';

import {baseUrl, instance} from '@/shared';

interface Product {
    id: string;
    category: string;
    picture: string;
    price: number;
}

interface OrderItem {
    quantity: number;
    createdAt: string;
    product: Product;
}

interface IOrdersResponse {
    data: OrderItem[][];
    meta: {
        total: number;
    };
}
export const useGetOrders = (page: number) => {
    const [data, setData] = useState<OrderItem[][]>([]);
    const [total, setTotal] = useState<number>();

    useEffect(() => {
        const fetchData = async () => {
            const res = await instance.get<IOrdersResponse>(
                `${baseUrl}orders?limit=10&page=${page}`,
            );
            if (res.data && Array.isArray(res.data.data)) {
                setData(res.data.data);
                setTotal(res.data.meta.total);
            }
        };

        fetchData();
    }, [page]);

    return {data, total};
};

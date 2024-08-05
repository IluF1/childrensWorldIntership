import {useEffect, useState} from 'react';

import {Order} from '@/entities/order/order';
import {baseUrl, instance} from '@/shared';

import styles from './view.module.css';

interface Product {
    id: string;
    category: string;
    picture: string;
}

interface OrderItem {
    quantity: number;
    createdAt: string;
    product: Product;
}

interface IOrdersResponse {
    data: OrderItem[][];
}

export const Orders = () => {
    const [data, setData] = useState<OrderItem[][]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await instance.get<IOrdersResponse>(`${baseUrl}orders?limit=5&page=1`);
                if (res.data && Array.isArray(res.data.data)) {
                    setData(res.data.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <ul className={styles.orders}>
                {data.map((orderGroup, groupIndex) => (
                    <li key={groupIndex} className={styles.orderGroup}>
                        <Order
                            id={orderGroup[0].product.id}
                            created={orderGroup[0].createdAt}
                            product={orderGroup.map((item) => item.product)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

import {useEffect, useState} from 'react';

import {Order} from '@/entities/order/order';
import {baseUrl, instance} from '@/shared';
import {ICartData} from '@/widgets/cart/model/helpers/interfaces';

import styles from './view.module.css';

export const Orders = () => {
    const [data, setData] = useState<ICartData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await instance.get(`${baseUrl}orders?limit=5&page=1`);
                if (res.data && Array.isArray(res.data.data)) {
                    const flattenedData = res.data.data.flat();
                    setData(flattenedData);
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
                {data.map((item) => (
                    <li key={item.product.id} className={styles.orders__item}>
                        <Order
                            pictures={item.product.picture}
                            created={item.createdAt}
                            amount={Number(item.product.price)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

// eslint-disable-next-line import/no-extraneous-dependencies
import {format} from 'date-fns';
// eslint-disable-next-line import/no-extraneous-dependencies
import {ru} from 'date-fns/locale';

import {Title, formatPrice} from '@/shared';

import styles from './Order.module.css';

interface Product {
    id: string;
    category: string;
    picture: string;
}

interface IOrder {
    id: string;
    created: string;
    total: number;
    product: Product[];
}

export const Order = ({created, product, id, total}: IOrder) => {
    const date = format(new Date(created), 'd MMMM yyyy', {locale: ru});
    return (
        <div className={styles.order}>
            <div className={styles.order__header}>
                <Title children={'Заказ'} style={'name'} />
                <Title children={'№' + id} style="bold" />
            </div>
            <ul className={styles.order__content}>
                {product.map((prod, index) => (
                    <li key={index} className={styles.order__product}>
                        <a href={`/product/${id}`}>
                            <img
                                src={prod.picture}
                                alt={`Product ${prod.id}`}
                                className={styles.order__pictures}
                            />
                        </a>
                    </li>
                ))}
            </ul>
            <div className={styles.order__info}>
                <Title children={'Оформлено'} style="name" />
                <Title children={date} style="bold" />
                <Title children={'На сумму'} style="name" />
                <Title children={formatPrice(total)} style="bold" />
            </div>
        </div>
    );
};

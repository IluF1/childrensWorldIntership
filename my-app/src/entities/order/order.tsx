// eslint-disable-next-line import/no-extraneous-dependencies
import {format} from 'date-fns';
// eslint-disable-next-line import/no-extraneous-dependencies
import {ru} from 'date-fns/locale';

import {Title} from '@/shared';

import styles from './order.module.css';

interface Product {
    id: string;
    category: string;
    picture: string;
}

interface IOrder {
    id: string;
    created: string;
    product: Product[];
}

export const Order = ({created, product, id}: IOrder) => {
    const date = format(new Date(created), 'd MMMM yyyy', {locale: ru});
    return (
        <div className={styles.order}>
            <div className={styles.orderHeader}>
                <Title children={'Заказ'} style={'name'} />
                <Title children={id} style="bold" />
            </div>
            <ul className={styles.orderContent}>
                {product.map((prod, index) => (
                    <li key={index} className={styles.product}>
                        <img
                            src={prod.picture}
                            alt={`Product ${prod.id}`}
                            className={styles.order__pictures}
                        />
                    </li>
                ))}
            </ul>
            <div className={styles.order__info}>
                <Title children={'Оформлено'} style="name" />
                <Title children={date} style="bold" />
                <Title children={'На сумму'} style="name" />
                <Title children={'12231'} style="bold" />
            </div>
        </div>
    );
};

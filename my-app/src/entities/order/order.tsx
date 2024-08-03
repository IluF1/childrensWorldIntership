import {Title} from '@/shared';

import styles from './order.module.css';

interface IOrder {
    created?: string;
    amount?: number;
    pictures: string;
    id?: number;
}

export const Order = ({created, amount, pictures, id}: IOrder) => (
    <div className={styles.order}>
        <div>
            <Title children={'Заказ'} style={'bold'} />
            <Title children={String(id)} style={'bold'} />
        </div>
        <div>
            <img src={pictures} className={styles.order__pictures} />
        </div>
        <div>
            <span>{created}</span>
            <span>{String(amount)}</span>
        </div>
    </div>
);

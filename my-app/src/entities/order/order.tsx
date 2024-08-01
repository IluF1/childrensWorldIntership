import {Title} from '@/shared';

import styles from './order.module.css';

interface IPictures {
    path: string;
}

interface IOrder {
    created?: string;
    amount?: number;
    pictures: IPictures[];
    id?: number;
}

export const Order = ({created, amount, pictures, id}: IOrder) => (
    <div className={styles.order}>
        <div>
            <Title children={'Заказ'} style={'bold'} />
            <Title children={String(id)} style={'bold'} />
        </div>
        <div>
            {pictures.map((item, index) => (
                <div key={index}>
                    <img src={item.path} alt={`order-${id}-image-${index}`} />
                </div>
            ))}
        </div>
        <div>
            <span>{created}</span>
            <span>{amount}</span>
        </div>
    </div>
);

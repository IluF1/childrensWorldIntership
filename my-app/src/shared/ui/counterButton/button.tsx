import {memo} from 'react';

import {useProductTotal} from './model/context';

import {halfMinus, minus, plus} from '@/shared';
import {Title} from '@/shared/ui/title/title';

import styles from './button.module.css';

interface ICartButtonProps {
    productId: number;
}

export const CartButton = memo(({productId}: ICartButtonProps) => {
    const {cartItems, setCount} = useProductTotal();
    const item = cartItems.find((item) => item.id === productId);

    const count = item ? item.count : 1;

    return (
        <div className={styles.button}>
            <button
                onClick={() => setCount(productId, count === 0 ? 0 : count - 1)}
                className={styles.button__minus}
            >
                <img src={count === 0 ? halfMinus : minus} alt="minus" loading="lazy" />
            </button>
            <Title style="bold">{count}</Title>
            <button onClick={() => setCount(productId, count + 1)} className={styles.button__plus}>
                <img src={plus} alt="plus" loading="lazy" />
            </button>
        </div>
    );
});

import {Box, Modal} from '@mui/material';

import {baseStyle} from './model/constants';
import {ICart} from './model/interfaces';

import {CartItem, MyButton, Title, formatPrice, useAppSelector} from '@/shared';

import styles from './view.module.css';

export const Cart = ({active, setActive}: ICart) => {
    const handleClose = () => setActive(false);

    const data = useAppSelector((state) => state.cart.cart);

    if (!data || data.length === 0) {
        return (
            <Modal open={active} onClose={handleClose} className={styles.modal}>
                <Box sx={baseStyle}>
                    <div>Ваша корзина пуста</div>
                </Box>
            </Modal>
        );
    }

    const totalPrice = data.reduce((acc, item) => {
        if (item && item.product) {
            const price = Number(item.product.price);
            return !isNaN(price) ? acc + price * item.quantity : acc;
        }
        return acc;
    }, 0);

    return (
        <Modal open={active} onClose={handleClose} className={styles.modal}>
            <Box sx={baseStyle}>
                <ul>
                    {data.map((item) =>
                        item.product ? (
                            <li key={item.product.id}>
                                <CartItem
                                    title={item.product.title}
                                    img={item.product.picture}
                                    price={item.product.price}
                                    id={item.product.id}
                                />
                            </li>
                        ) : (
                            <li className={styles['cart-item-error']}>Ошибка данных товара</li>
                        ),
                    )}
                </ul>
                <div className={styles['cart__amount-total']}>
                    <div className={styles.cart__total}>
                        <h2 className={styles['cart__total-text']}>Итого</h2>
                        <div className={styles['cart__total-price']}>
                            <Title style="bigPrice">{formatPrice(totalPrice)}</Title>
                        </div>
                    </div>
                    <MyButton children="Оформить заказ" />
                </div>
            </Box>
        </Modal>
    );
};

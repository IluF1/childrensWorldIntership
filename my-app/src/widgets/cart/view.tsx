import {memo} from 'react';

import {Box, Modal} from '@mui/material';
import axios from 'axios';

import {baseStyle} from './model/helpers/constants';
import {ICart} from './model/helpers/interfaces';

import {CartItem, MyButton, Title, formatPrice, useAppSelector} from '@/shared';
import {useProductTotal} from '@/shared/ui/counterButton/model/context';

import styles from './view.module.css';

const Cart = ({active, setActive}: ICart) => {
    const handleClose = () => setActive(false);

    const data = useAppSelector((state) => state.cart.cart);

    const {cartItems} = useProductTotal();

    const totalPrice = data.reduce((acc, item) => {
        const productCount =
            cartItems.find((cartItem) => cartItem.id === Number(item.product.id))?.count || 1;
        return acc + Number(item.product.price) * productCount;
    }, 0);

    const cartSubmit = () => {
        axios.post('https://skillfactory-task.detmir.team/cart/submit');
    };

    return (
        <Modal open={active} onClose={handleClose} className={styles.modal}>
            <Box sx={baseStyle}>
                {data ? (
                    <>
                        <ul>
                            {data.map((item) => (
                                <li key={item.product.id}>
                                    <CartItem
                                        title={item.product.title}
                                        img={item.product.picture}
                                        price={Number(item.product.price)}
                                        id={item.product.id}
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className={styles['cart__amount-total']}>
                            <div className={styles.cart__total}>
                                <h2 className={styles['cart__total-text']}>Итого</h2>
                                <div className={styles['cart__total-price']}>
                                    <Title style="bigPrice">{formatPrice(totalPrice)}</Title>
                                </div>
                            </div>
                            <MyButton children="Оформить заказ" onClick={cartSubmit} />
                        </div>
                    </>
                ) : (
                    <Title children="Ваша корзина пуста" style="bold" />
                )}
            </Box>
        </Modal>
    );
};

export default memo(Cart);

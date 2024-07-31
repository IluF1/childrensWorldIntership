import {Box, Modal} from '@mui/material';

import {baseStyle} from './model/constants';
import {ICart} from './model/interfaces';

import {useProductTotal} from '@/entities/cart_item/ui/button/model/context';
import {CartItem, MyButton, Title, formatPrice, useAppSelector} from '@/shared';

import styles from './view.module.css';

export const Cart = ({active, setActive}: ICart) => {
    const handleClose = () => setActive(false);

    const data = useAppSelector((state) => state.cart.cart);

    const {cartItems} = useProductTotal();

    const totalPrice = data.reduce((acc, item) => {
        const productCount =
            cartItems.find((cartItem) => cartItem.id === Number(item.product.id))?.count || 1;
        return acc + Number(item.product.price) * productCount;
    }, 0);
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
                            <MyButton children="Оформить заказ" />
                        </div>
                    </>
                ) : (
                    <Title children="Ваша корзина пуста" style="bold" />
                )}
            </Box>
        </Modal>
    );
};

import {Box, Modal} from '@mui/material';

import {baseStyle} from './model/helpers/constants';
import {ICart} from './model/helpers/interfaces';

import {updateCart} from '@/features/Api/Api';
import {
    CartItem,
    MyButton,
    Title,
    baseUrl,
    formatPrice,
    useAppDispatch,
    useAppSelector,
} from '@/shared';
import {instance} from '@/shared/Utils/Constants/instance';

import styles from './Cart.module.css';

export const Cart = ({active, setActive}: ICart) => {
    const handleClose = () => setActive(false);

    const data = useAppSelector((state) => state.cart.cart);

    const dispatch = useAppDispatch();
    const cartSubmit = () => {
        instance.post(`${baseUrl}cart/submit`, null);
        dispatch(updateCart([]));
    };

    const totalPrice = data.reduce((acc, item) => {
        return acc + Number(item.product.price) * (item.quantity || 1);
    }, 0);

    return (
        <div>
            <Modal open={active} onClose={handleClose} className={styles.modal}>
                <Box sx={baseStyle}>
                    {data.length ? (
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
                                <MyButton onClick={cartSubmit}>Оформить заказ</MyButton>
                            </div>
                        </>
                    ) : (
                        <Title style="bold">Ваша корзина пуста</Title>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

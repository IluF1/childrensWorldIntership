import {useState} from 'react';

import {Alert, Box, Modal, Snackbar} from '@mui/material';

import {baseStyle} from './model/helpers/constants';
import {ICart} from './model/helpers/interfaces';

import {updateCart} from '@/features/api/api';
import {
    CartItem,
    MyButton,
    Title,
    baseUrl,
    formatPrice,
    useAppDispatch,
    useAppSelector,
} from '@/shared';
import {useProductTotal} from '@/shared/ui/counterButton/model/context';
import {instance} from '@/shared/utils/constants/instance';

import styles from './view.module.css';

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const alert = (open: boolean) => {
    return (
        <div>
            {open ? (
                <Snackbar open={open} autoHideDuration={60}>
                    <Alert severity="success" variant="filled" sx={{width: '100%'}}>
                        This is a success Alert inside a Snackbar!
                    </Alert>
                </Snackbar>
            ) : null}
        </div>
    );
};
export const Cart = ({active, setActive}: ICart) => {
    const handleClose = () => setActive(false);
    const [open, setOpen] = useState(true);

    const data = useAppSelector((state) => state.cart.cart);

    const dispatch = useAppDispatch();
    const cartSubmit = () => {
        instance.post(`${baseUrl}cart/submit`, null);
        dispatch(updateCart([]));
        setOpen(true);
    };

    const {cartItems} = useProductTotal();

    const totalPrice = data.reduce((acc, item) => {
        const productCount =
            cartItems.find((cartItem) => cartItem.id === Number(item.product.id))?.count || 1;
        return acc + Number(item.product.price) * productCount;
    }, 0);

    return (
        <div>
            {alert(open)}
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
                                <MyButton children="Оформить заказ" onClick={cartSubmit} />
                            </div>
                        </>
                    ) : (
                        <Title children="Ваша корзина пуста" style="bold" />
                    )}
                </Box>
            </Modal>
        </div>
    );
};

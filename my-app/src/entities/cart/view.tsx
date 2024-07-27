import { Box, Modal } from '@mui/material';

import { style } from './model/constants';
import { ICart } from './model/interfaces';
import styles from './view.module.css';
import { CartItem } from '../cart_item/view';
import { useAppDispatch, useAppSelector } from '@/features/store/store';
import { useEffect } from 'react';
import { fetchCartData } from '@/features/store/api';
import { formatPrice, MyButton, Title } from '@/shared';

export const Cart = ({ active, setActive }: ICart) => {
  const handleClose = () => setActive(false);

  const data = useAppSelector(state => state.cart.cart);
  const dispatch = useAppDispatch();

  if (!data || data.length === 0) {
    return (
      <Modal open={active} onClose={handleClose} className={styles.modal}>
        <Box sx={style}>
          <div>No items in the cart</div>
        </Box>
      </Modal>
    );
  }

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  const totalPrice = data.reduce((acc, item) => {
    if (item && item.product) {
      const price = Number(item.product.price);
      return !isNaN(price) ? acc + price : acc;
    }
    return acc;
  }, 0);

  return (
    <div>
      <Modal open={active} onClose={handleClose} className={styles.modal}>
        <Box sx={style}>
          <div>
            <ul>
              {data.map(item => (
                <li key={item.product.id}>
                  <CartItem
                    title={item.product.title}
                    img={item.product.picture}
                    price={item.product.price}
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
          </div>
        </Box>
      </Modal>
    </div>
  );
};

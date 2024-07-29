import { useEffect, useState } from 'react';

import { Box, Modal } from '@mui/material';

import { formatPrice, MyButton, Title, useAppSelector } from '@/shared';

import { getDynamicStyle } from './model/constants';
import { ICart } from './model/interfaces';
import styles from './view.module.css';
import { CartItem } from '../cart_item/view';

export const Cart = ({ active, setActive }: ICart) => {
  const [isScrollable, setIsScrollable] = useState(window.innerHeight < 600);

  const handleClose = () => setActive(false);

  const data = useAppSelector(state => state.cart.cart);

  useEffect(() => {
    const handleResize = () => {
      setIsScrollable(window.innerHeight < 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!data || data.length === 0) {
    return (
      <Modal open={active} onClose={handleClose} className={styles.modal}>
        <Box sx={getDynamicStyle(isScrollable)}>
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
      <Box sx={getDynamicStyle(isScrollable)}>
        <ul>
          {data.map(item =>
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
              <li className={styles['cart-item-error']}>
                Ошибка данных товара
              </li>
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

import { Box, Modal } from '@mui/material';

import { MyButton } from '@/features/ui/button/button';

import { style } from './components/constants';
import { ICart } from './components/interfaces';
import styles from './view.module.css';
import { CartItem } from '../cart_item/view';
import { useAppDispatch, useAppSelector } from '@/features/store/store';
import { useEffect } from 'react';
import { fetchDataCart } from '@/features/store/slices/cart.slice';

export const Cart = ({ active, setActive }: ICart) => {
  const handleClose = () => setActive(false);
  const dispatch = useAppDispatch()
  const items = useAppSelector(state => state.cart.cart)
  useEffect(() => {
    dispatch(fetchDataCart())
  }, [dispatch])
  return (
    <div>
      <Modal open={active} onClose={handleClose} className={styles.modal}>
        <Box sx={style}>
          <div>
            <ul>
              {items?.map(product => (
                <li key={product.product.id}>
                  <CartItem
                    title={product.product.title}
                    price={product.product.price}
                    img={product.product.picture}
                    id={product.product.id}
                  />
                </li>
              ))}
            </ul>
            <div className={styles['cart__amount-total']}>
              <div className={styles.cart__total}>
                <h2 className={styles['cart__total-text']}>Итого</h2>
                <div className={styles['cart__total-price']}></div>
              </div>
              <MyButton children="Оформить заказ" />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

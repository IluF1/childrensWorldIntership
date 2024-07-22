import { Box, Modal } from '@mui/material';

import { MyButton } from '@/components/ui/button/button';
import { useGetStateCart } from '@/utils/hooks/useGetStateCart';

import styles from './cart.module.css';
import { style } from './components/constants';
import { ICart } from './components/interfaces';
import { CartItem } from '../cart_item/cart_item';

export const Cart = ({ active, setActive }: ICart) => {
  const handleClose = () => setActive(false);
  const { data } = useGetStateCart();

  return (
    <div>
      <Modal open={active} onClose={handleClose} className={styles.modal}>
        <Box sx={style}>
          <div>
            <ul>
              {data?.map(product => (
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

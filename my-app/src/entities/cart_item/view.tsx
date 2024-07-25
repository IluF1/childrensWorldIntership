import { Title } from '@/features/ui/title/title';
import { formatPrice } from '@/features/utils/helpers/formatPrice';

import { ICartItem } from './interfaces/interfaces';
import styles from './view.module.css';

export const CartItem = ({ title, img, price, id }: ICartItem) => {
  return (
    <div className={styles['cart-item']}>
      
        <img src={img} alt={title} className={styles['cart-item__img']} />
        <h1 className={styles['cart-item__title']}><a href={`/product/${id}`}>{title}</a></h1>
        <div className={styles['cart-item__btn']}></div>
        <div className={styles['cart-item__price']}>
          <Title style="price">{formatPrice(price)}</Title>
        </div>
      
    </div>
  );
};

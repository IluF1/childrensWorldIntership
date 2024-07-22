import { Title } from '@/components/ui/title/title';
import { formatPrice } from '@/utils/helpers/formatPrice';

import styles from './cart_item.module.css';
import { ICartItem } from './interfaces/interfaces';

export const CartItem = ({ title, img, price, id }: ICartItem) => {
  return (
    <div className={styles['cart-item']}>
      <a href={`/product/${id}`}>
        <img src={img} alt={title} className={styles['cart-item__img']} />
        <h1 className={styles['cart-item__title']}>{title}</h1>
        <div className={styles['cart-item__btn']}></div>
        <div className={styles['cart-item__price']}>
          <Title style="price">{formatPrice(price)}</Title>
        </div>
      </a>
    </div>
  );
};

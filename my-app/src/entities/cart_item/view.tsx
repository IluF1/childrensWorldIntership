import { ICartItem } from './model/interfaces';
import styles from './view.module.css';
import { CartButton } from './ui/button/button';
import { formatPrice, Title } from '@/shared';

export const CartItem = ({ title, img, price, id }: ICartItem) => {
  return (
    <div className={styles['cart-item']}>
      <div className={styles['cart-item__img-block']}>
        <img src={img} alt={title} className={styles['cart-item__img']} />
      </div>
      <h1 className={styles['cart-item__title']}>
        <a href={`/product/${id}`}>{title}</a>
      </h1>
      <div className={styles['cart-item__btn']}>
        <CartButton />
      </div>

      <div className={styles['cart-item__price']}>
        <Title style="price">{formatPrice(price)}</Title>
      </div>
    </div>
  );
};

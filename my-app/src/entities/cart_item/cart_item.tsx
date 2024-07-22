import { Title } from '@/components/ui/title/title';
import { formatPrice } from '@/utils/helpers/formatPrice';

import styles from './cart_item.module.css';
import { ICartItem } from './interfaces/interfaces';

export const CartItem = ({ title, img, price, id }: ICartItem) => {
  return (
    <div className={styles.container}>
      <a href={`/product/${id}`}>
        <img src={img} alt={title} className={styles.img} />

        <h1 className={styles.title}>{title}</h1>
        <div className={styles.btn}></div>
        <div className={styles.price}>
          <Title style="price" children={formatPrice(price)} />
        </div>
      </a>
    </div>
  );
};

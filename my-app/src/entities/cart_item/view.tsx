import {CartButton} from './ui/button/button';
import {useProductTotal} from './ui/button/model/context';

import {Title, formatPrice, trash} from '@/shared';

import styles from './view.module.css';

interface ICartItem {
    title: string;
    img: string;
    price: number;
    id: string;
}

export const CartItem = ({title, img, price, id}: ICartItem) => {
    const {cartItems} = useProductTotal();
    const item = cartItems.find((item) => item.id === Number(id));
    const count = item ? item.count : 1;
    return (
        <div className={styles['cart-item']}>
            <div className={styles.content}>
                <div className={styles['cart-item__img-block']}>
                    <img
                        src={img}
                        alt={title}
                        loading="lazy"
                        className={styles['cart-item__img']}
                    />
                </div>
                <h1 className={styles['cart-item__title']}>
                    <a href={`/product/${id}`}>{title}</a>
                </h1>
                <div className={styles['cart-item__btn']}>
                    <CartButton productId={Number(id)} />
                </div>

                <div className={styles['cart-item__price']}>
                    {count === 0 ? (
                        <Title style="red">
                            <img src={trash} alt="trash" className={styles.trash_img} />
                            Удалить
                        </Title>
                    ) : (
                        <Title style="price">{formatPrice(price * Number(count))}</Title>
                    )}
                </div>
            </div>
        </div>
    );
};

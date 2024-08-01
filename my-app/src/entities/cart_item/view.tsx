import {CartButton} from '../../shared/ui/counterButton/button';
import {useProductTotal} from '../../shared/ui/counterButton/model/context';

import {updateCart} from '@/features/api/api';
import {Title, formatPrice, trash, useAppDispatch, useAppSelector} from '@/shared';

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
    const products = useAppSelector((state) => state.cart.cart);
    const dispatch = useAppDispatch();

    const removeItemFromCart = () => {
        const newItems = products.filter((item) => item.product.id !== id);
        dispatch(updateCart(newItems));
    };

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
                        <button onClick={removeItemFromCart}>
                            <Title style="red">
                                <img src={trash} alt="trash" className={styles.trash_img} />
                                Удалить
                            </Title>
                        </button>
                    ) : (
                        <Title style="price">{formatPrice(price * Number(count))}</Title>
                    )}
                </div>
            </div>
        </div>
    );
};

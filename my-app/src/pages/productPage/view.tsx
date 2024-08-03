import {memo} from 'react';

import {Rating} from '@mui/material';
import {useNavigate} from 'react-router-dom';

import {productId} from './model/helpers/constants';

import {updateCart} from '@/features/api/api';
import {useGetProductById} from '@/features/hooks/useGetProductById';
import {addItem} from '@/features/slice/cart.slice';
import {
    CartButton,
    MyButton,
    Title,
    arrowLeft,
    formatPrice,
    noneStar,
    star,
    undoImg,
    useAppDispatch,
    useAppSelector,
} from '@/shared';
import {ICartData} from '@/widgets/cart/model/helpers/interfaces';

import styles from './view.module.css';

const ProductPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {card} = useGetProductById(Number(productId));
    const cartItems = useAppSelector((state) => state.cart.cart);

    if (!card) {
        return <div></div>;
    }

    const existingItem = cartItems.find((item) => item.product.id === card.id);
    const handler = () => {
        const newItem: ICartData = {
            product: {
                id: card.id,
                title: card.title,
                description: card.description,
                category: card.category,
                price: String(card.price),
                picture: card.picture,
                rating: String(card.rating),
            },
            quantity: 1,
        };

        let updatedCart: ICartData[] = [];
        if (!existingItem) {
            updatedCart = [...cartItems, newItem];
        }

        dispatch(addItem(newItem));
        dispatch(updateCart(updatedCart));
    };

    return (
        <div className={styles['product-page']}>
            <a className={styles['product-page__back']} onClick={() => navigate(-1)}>
                <img
                    src={arrowLeft}
                    alt="back"
                    className={styles['product-page__back-img']}
                    loading="lazy"
                />
                Назад
            </a>
            <div className={styles['product-page__container']}>
                <div className={styles['product-page__main']}>
                    <img
                        src={card?.picture}
                        alt={card?.title}
                        className={styles['product-page__picture']}
                        loading="lazy"
                    />
                    <div className={styles['product-page__information']}>
                        <Title style="bigName">{card?.title}</Title>
                        <Rating
                            value={Number(card?.rating)}
                            icon={<img src={star} alt="star" />}
                            readOnly
                            emptyIcon={<img src={noneStar} alt="star" />}
                            className={styles['product-page__rating']}
                            size="large"
                        />
                        <div className={styles['product-page__price']}>
                            <Title style="bigPrice">{formatPrice(Number(card?.price))}</Title>
                        </div>

                        {existingItem ? (
                            <div className={styles['product-page__checkout']}>
                                <CartButton productId={Number(card.id)} />
                                <MyButton children="Оформить заказ" />
                            </div>
                        ) : (
                            <div className={styles['product-page__add-to-cart-btn']}>
                                <MyButton onClick={handler}>Добавить в корзину</MyButton>
                            </div>
                        )}
                        <div className={styles['product-page__return-condition']}>
                            <Title style="bold">
                                <img
                                    src={undoImg}
                                    alt="img"
                                    className={styles['product-page__return-condition-img']}
                                    loading="lazy"
                                />
                                Условие возврата
                            </Title>
                            <h3 className={styles['product-page__return-condition-text']}>
                                Обменять или вернуть товар надлежащего качества можно в течение 14
                                дней с момента покупки.
                            </h3>
                            <h4 className={styles['product-page__prices-may-vary']}>
                                Цены в интернет-магазине могут отличаться от розничных магазинов.
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={styles['product-page__description']}>
                    <Title style="bold">Описание</Title>
                    <div
                        className={styles['product-page__description-text']}
                        dangerouslySetInnerHTML={{
                            __html: card?.description,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(ProductPage);

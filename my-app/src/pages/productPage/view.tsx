import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { productId } from './model/helpers/constants';
import { useGetProductById } from './model/hooks/useGetProductById';
import styles from './view.module.css';
import { useAppDispatch } from '@/features/store/store';
import { addItemToCart } from '@/features/store/api';
import {
  arrowLeft,
  formatPrice,
  IData,
  MyButton,
  noneStar,
  star,
  Title,
  undoImg,
} from '@/shared';

export const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { card } = useGetProductById(Number(productId));

  if (!card) {
    return <div></div>;
  }

  const item: IData = {
    data: {
      id: card.id,
      quantity: 1,
    },
  };

  const handler = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className={styles['product-page']}>
      <a className={styles['product-page__back']} onClick={() => navigate(-1)}>
        <img
          src={arrowLeft}
          alt="back"
          className={styles['product-page__back-img']}
        />
        Назад
      </a>
      <div className={styles['product-page__container']}>
        <div className={styles['product-page__main']}>
          <img
            src={card?.picture}
            alt={card?.title}
            className={styles['product-page__picture']}
          />
          <div className={styles['product-page__information']}>
            <Title style="bigName">{card?.title}</Title>
            <Rating
              value={Number(card?.rating)}
              icon={<img src={star} alt="star" />}
              readOnly
              emptyIcon={<img src={noneStar} alt="star" />}
              className={styles['product-page__rating']}
            />
            <div className={styles['product-page__price']}>
              <Title style="bigPrice">{formatPrice(Number(card?.price))}</Title>
            </div>
            <div className={styles['product-page__add-to-cart-btn']}>
              <MyButton onClick={handler}>Добавить в корзину</MyButton>
            </div>
            <div className={styles['product-page__return-condition']}>
              <Title style="bold">
                <img
                  src={undoImg}
                  alt="img"
                  className={styles['product-page__return-condition-img']}
                />
                Условие возврата
              </Title>
              <h3 className={styles['product-page__return-condition-text']}>
                Обменять или вернуть товар надлежащего качества можно в течение
                14 дней с момента покупки.
              </h3>
              <h4 className={styles['product-page__prices-may-vary']}>
                Цены в интернет-магазине могут отличаться от розничных
                магазинов.
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

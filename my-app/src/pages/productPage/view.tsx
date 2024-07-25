import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import arrowLeft from '@/app/assets/images/Arrow Left.svg';
import noneStar from '@/app/assets/images/Fillness=None.svg';
import star from '@/app/assets/images/Star.svg';
import undoImg from '@/app/assets/images/Undo.svg';
import { MyButton } from '@/features/ui/button/button';
import { Title } from '@/features/ui/title/title';
import { formatPrice } from '@/features/utils/helpers/formatPrice';

import { productId } from './components/helpers/constants';
import { useGetProductById } from './components/hooks/useGetProductById';
import styles from './view.module.css';
import { useAppDispatch } from '@/features/store/store';
import { addItemToCart } from '@/features/store/slices/cart.slice';


export const ProductPage = () => {
  const navigate = useNavigate();
  const { card } = useGetProductById(Number(productId));
  const dispatch = useAppDispatch()
  if (!card) {
    return <div></div>
  }
  const handleAddToCart = () => {
    const item = {
      quantity: 1,
      id: card.id
    };
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
              <Title style="bigPrice">
                {formatPrice(Number(card?.price))}
              </Title>
            </div>
            <div className={styles['product-page__add-to-cart-btn']}>
              <MyButton onClick={handleAddToCart}>Добавить в корзину</MyButton>
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

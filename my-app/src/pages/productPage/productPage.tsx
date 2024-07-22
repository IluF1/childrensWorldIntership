import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import arrowLeft from '@/app/assets/images/Arrow Left.svg';
import noneStar from '@/app/assets/images/Fillness=None.svg';
import star from '@/app/assets/images/Star.svg';
import undoImg from '@/app/assets/images/Undo.svg';
import { MyButton } from '@/components/ui/button/button';
import { Title } from '@/components/ui/title/title';
import { formatPrice } from '@/utils/helpers/formatPrice';
import { useGetProductById } from '@/utils/hooks/useGetProductById';

import { productId } from './components/constants';
import styles from './productPage.module.css';

export const ProductPage = () => {
  const navigate = useNavigate();
  const { product } = useGetProductById(Number(productId));
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
            src={product?.picture}
            alt={product?.title}
            className={styles['product-page__picture']}
          />
          <div className={styles['product-page__information']}>
            <Title style="bigName">{product?.title}</Title>
            <Rating
              value={Number(product?.rating)}
              icon={<img src={star} alt="star" />}
              readOnly
              emptyIcon={<img src={noneStar} alt="star" />}
              className={styles['product-page__rating']}
            />
            <div className={styles['product-page__price']}>
              <Title style="bigPrice">
                {formatPrice(Number(product?.price))}
              </Title>
            </div>
            <div className={styles['product-page__add-to-cart-btn']}>
              <MyButton>Добавить в корзину</MyButton>
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
              __html: product?.description,
            }}
          />
        </div>
      </div>
    </div>
  );
};

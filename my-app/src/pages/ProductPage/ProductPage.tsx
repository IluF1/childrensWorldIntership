import { memo, useEffect } from 'react'

import { Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { productId } from './model/helpers/constants'
import styles from './ProductPage.module.css'
import notImgIcon from '@/app/assets/images/no-image.png'
import { updateCart } from '@/features/Api/Api'
import { useGetProductById } from '@/features/Hooks/useGetProductById'
import type {
  ICartData,
} from '@/shared'
import {
  CounterProductButton,
  MyButton,
  Title,
  arrowLeft,
  formatPrice,
  instance,
  noneStar,
  star,
  undoImg,
  useAppDispatch,
  useAppSelector,
} from '@/shared'

import { setTotalPrice } from '@/features/Slices/Cart.slice'

export const ProductPage = memo(() => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { card } = useGetProductById(Number(productId))
  const cart = useAppSelector(state => state.cart.cart)
  const totalPrice = useAppSelector(state => state.cart.totalPrice)
  const existingItem = cart.find(item => item.product.id === card?.id)

  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (acc, item) => acc + Number(item.product.price) * item.quantity,
      0,
    )
    dispatch(setTotalPrice(newTotalPrice))
  }, [cart, dispatch])

  if (!card) {
    return null
  }

  const handleAddToCart = () => {
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
      quantity: existingItem ? existingItem.quantity + 1 : 1,
    }

    const updatedCart = existingItem
      ? cart.map(item => (item.product.id === card.id ? newItem : item))
      : [...cart, newItem]

    dispatch(updateCart(updatedCart))
  }

  const handleCartSubmit = () => {
    instance.post('cart/submit', null)
    dispatch(updateCart([]))
  }

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
            src={card.picture}
            alt={card?.title}
            className={styles['product-page__picture']}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = notImgIcon
            }}
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

            <Title style="bigPrice" className={styles['product-page__price']}>
              {formatPrice(Number(card?.price))}
            </Title>

            {existingItem
              ? (
                  <div className={styles['product-page__checkout']}>
                    <CounterProductButton productId={Number(card.id)} />
                    <MyButton
                      children="Оформить заказ"
                      onClick={handleCartSubmit}
                      disabled={totalPrice >= 10000}
                    />
                  </div>
                )
              : (
                  <MyButton
                    onClick={handleAddToCart}
                    className={styles['product-page__add-to-cart-btn']}
                  >
                    Добавить в корзину
                  </MyButton>
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
  )
})

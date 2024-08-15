import { memo, useEffect } from 'react'

import { Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { productId } from './model/helpers/constants'

import styles from './ProductPage.module.css'
import { updateCart } from '@/features/Api/Api'
import { useGetProductById } from '@/features/Hooks/useGetProductById'
import {
  CounterProductButton,
  MyButton,
  Title,
  arrowLeft,
  baseUrl,
  formatPrice,
  instance,
  noneStar,
  star,
  undoImg,
  useAppDispatch,
  useAppSelector,
} from '@/shared'
import type { ICartData } from '@/widgets/Cart/model/helpers/interfaces'
import { setTotalPrice } from '@/features/Slices/Cart.slice'

export const ProductPage = memo(() => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { card } = useGetProductById(Number(productId))
  const cart = useAppSelector(state => state.cart.cart)
  const totalPrice = useAppSelector(state => state.cart.totalPrice)

  useEffect(() => {
    dispatch(
      setTotalPrice(
        cart.reduce((acc, item) => {
          return acc + Number(item.product.price) * (item.quantity || 1)
        }, 0),
      ),
    )
  }, [cart])
  if (!card) {
    return <div></div>
  }
  const existingItem = cart.find(item => item.product.id === card.id)
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
    }

    let updatedCart: ICartData[] = []
    if (!existingItem) {
      updatedCart = [...cart, newItem]
    }

    dispatch(updateCart(updatedCart))
  }

  const cartSubmit = () => {
    instance.post(`${baseUrl}cart/submit`, null)
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

            <Title style="bigPrice" className={styles['product-page__price']}>{formatPrice(Number(card?.price))}</Title>

            {existingItem
              ? (
                  <div className={styles['product-page__checkout']}>
                    <CounterProductButton productId={Number(card.id)} />
                    <MyButton
                      children="Оформить заказ"
                      onClick={cartSubmit}
                      disabled={totalPrice >= 10000}
                    />
                  </div>
                )
              : (

                  <MyButton
                    onClick={handler}
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

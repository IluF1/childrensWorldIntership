import { memo, useEffect } from 'react'
import styles from './CartItem.module.css'

import { updateCart } from '@/features/Api/Api'
import {
  CounterProductButton,
  Title,
  formatPrice,
  trash,
  useAppDispatch,
  useAppSelector,
} from '@/shared'
import { setTotalPrice } from '@/features/Slices/Cart.slice'

import notImgIcon from '@/app/assets/images/no-image.png'

interface Props {
  title: string
  img: string
  price: number
  id: string
}

export const CartItem = memo(({ title, img, price, id }: Props) => {
  const products = useAppSelector(state => state.cart.cart)
  const dispatch = useAppDispatch()

  const totalProductCount = products.find(item => item.product.id === id)?.quantity || 0

  useEffect(() => {
    const updatedTotalPrice = products.reduce((acc, item) => {
      return acc + Number(item.product.price) * (item.quantity || 1)
    }, 0)
    dispatch(setTotalPrice(updatedTotalPrice))
  }, [products, dispatch])

  const removeItemFromCart = () => {
    dispatch(updateCart(products.filter(item => item.product.id !== id)))
  }

  return (
    <div className={styles['cart-item']}>
      <div className={styles.content}>
        <a href={`/product/${id}`}>
          {' '}
          <div className={styles['cart-item__img-block']}>
            <img
              src={img}
              alt={title}
              loading="lazy"
              className={styles['cart-item__img']}
              onError={(e) => {
                e.currentTarget.src = notImgIcon
              }}
            />
          </div>
        </a>
        <h1 className={styles['cart-item__title']}>
          <a href={`/product/${id}`}>{title}</a>
        </h1>

        <div className={styles['cart-item__block-btn']}>
          <CounterProductButton
            productId={Number(id)}
            className={styles['cart-item__btn']}
          />
        </div>

        <div className={styles['cart-item__price']}>
          {totalProductCount > 1
            ? (
                <p className={styles['cart-item__price-per-piece']}>
                  {`${formatPrice(price)} за шт.`}
                </p>
              )
            : null}
          {totalProductCount === 0
            ? (
                <button onClick={removeItemFromCart}>
                  <Title style="red">
                    <img src={trash} alt="trash" className={styles.trash_img} />
                    Удалить
                  </Title>
                </button>
              )
            : (
                <Title style="price">
                  {formatPrice(price * totalProductCount)}
                </Title>
              )}
        </div>
      </div>
    </div>
  )
})

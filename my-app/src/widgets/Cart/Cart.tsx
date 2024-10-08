import { useEffect, useState } from 'react'

import { Box, Modal } from '@mui/material'

import { baseStyle } from './model/helpers/constants'

import styles from './Cart.module.css'
import { updateCart } from '@/features/Api/Api'
import {
  CartItem,
  MyButton,
  Title,
  formatPrice,
  instance,
  useAppDispatch,
  useAppSelector,
} from '@/shared'

export interface Props {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export function Cart({ active, setActive }: Props) {
  const handleClose = () => setActive(false)

  const [order, setOrder] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const data = useAppSelector(state => state.cart.cart)
  const totalPrice = useAppSelector(state => state.cart.totalPrice)

  const dispatch = useAppDispatch()

  const cartSubmit = () => {
    instance.post('/cart/submit', null)
    dispatch(updateCart([]))
    setOrder(true)
  }
  useEffect(() => {
    if (totalPrice <= 10000) {
      setError(false)
    }
    else {
      setError(true)
    }
  }, [totalPrice])
  return (
    <div>
      <Modal open={active} onClose={handleClose} className={styles.modal}>
        <Box sx={baseStyle}>
          {data.length
            ? (
                <>
                  <ul>
                    {data.map(item => (
                      <li key={item.product.id}>
                        <CartItem
                          title={item.product.title}
                          img={item.product.picture}
                          price={Number(item.product.price)}
                          id={item.product.id}
                        />
                      </li>
                    ))}
                  </ul>
                  <div className={styles['cart__amount-total']}>
                    <div className={styles.cart__total}>
                      <h2 className={styles['cart__total-text']}>Итого</h2>
                      <div className={styles['cart__total-price']}>
                        <Title style="bigPrice">{formatPrice(totalPrice)}</Title>
                      </div>
                    </div>
                    <MyButton onClick={cartSubmit} disabled={error}>
                      Оформить заказ
                    </MyButton>
                  </div>
                  {error
                    ? (
                        <Title style="red">
                          Общая сумма корзины не должна превышать 10000 рублей
                        </Title>
                      )
                    : null}
                </>
              )
            : (
                <Title style="bold">
                  {order
                    ? (
                        <span>
                          Ваш заказ успешно оформлен, перейдите на страницу
                          {' '}
                          <a href="/orders" className={styles.modal__redirect_text}>
                            заказов
                          </a>
                        </span>
                      )
                    : (
                        'Ваша корзина пустая :('
                      )}
                </Title>
              )}
        </Box>
      </Modal>
    </div>
  )
}

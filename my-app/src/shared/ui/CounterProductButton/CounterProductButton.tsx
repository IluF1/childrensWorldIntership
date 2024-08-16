import { Title } from '../Title/Title'

import styles from './CounterProductButton.module.css'
import { decrementQuantityItem, incrementQuantityItem } from '@/features/Slices/Cart.slice'
import { halfMinus, minus, plus, useAppDispatch, useAppSelector } from '@/shared'

interface Props {
  productId: number
  className?: string
}

export function CounterProductButton({ productId, className }: Props) {
  const items = useAppSelector(state => state.cart.cart)
  const item = items.find(product => Number(product.product.id) === productId)
  const dispatch = useAppDispatch()

  const count = item ? item.quantity : 1

  return (
    <div className={className}>
      <div className={styles.button}>
        <button
          onClick={() => dispatch(decrementQuantityItem(String(productId)))}
          className={styles.button__minus}
        >
          <img
            src={count === 0 ? halfMinus : minus}
            alt="minus"
            loading="lazy"
          />
        </button>
        <Title style="bold" className={styles.count}>{count}</Title>
        <button
          onClick={() => dispatch(incrementQuantityItem(String(productId)))}
          className={styles.button__plus}
        >
          <img src={plus} alt="plus" loading="lazy" />
        </button>
      </div>
    </div>
  )
}

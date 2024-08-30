import { Title } from '../Title/Title'
import styles from './CounterProductButton.module.css'
import { updateCart } from '@/features/Api/Api'
import {
  halfMinus,
  minus,
  plus,
  useAppDispatch,
  useAppSelector,
} from '@/shared'

interface Props {
  productId: number
  className?: string
}

export function CounterProductButton({ productId, className }: Props) {
  const items = useAppSelector(state => state.cart.cart)
  const item = items.find(
    product => Number(product.product.id) === productId,
  )
  const dispatch = useAppDispatch()

  const count = item ? item.quantity : 1

  const updateCartQuantity = (newQuantity: number) => {
    const updatedCart = items.map(product =>
      Number(product.product.id) === productId
        ? { ...product, quantity: newQuantity }
        : product,
    )
    dispatch(updateCart(updatedCart))
  }

  const handleIncrement = () => {
    if (item) {
      updateCartQuantity(count + 1)
    }
  }

  const handleDecrement = () => {
    if (item && count > 0) {
      updateCartQuantity(count - 1)
    }
  }

  return (
    <div className={className}>
      <div className={styles.button}>
        <button onClick={handleDecrement} className={styles.button__minus}>
          <img
            src={count === 0 ? halfMinus : minus}
            alt="minus"
            loading="lazy"
          />
        </button>
        <Title style="bold" className={styles.count}>
          {count}
        </Title>
        <button onClick={handleIncrement} className={styles.button__plus}>
          <img src={plus} alt="plus" loading="lazy" />
        </button>
      </div>
    </div>
  )
}

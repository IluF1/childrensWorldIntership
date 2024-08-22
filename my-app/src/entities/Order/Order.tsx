import { format } from 'date-fns'

import { ru } from 'date-fns/locale'

import styles from './Order.module.css'
import { Title, formatPrice } from '@/shared'

import notImgIcon from '@/app/assets/images/no-image.png'

interface Product {
  id: string
  category: string
  picture: string
}

interface IOrder {
  id: string
  created: string
  total: number
  product: Product[]
}

export function Order({ created, product, id, total }: IOrder) {
  const date = format(new Date(created), 'd MMMM yyyy', { locale: ru })
  return (
    <div className={styles.order}>
      <div className={styles.order__header}>
        <Title children="Заказ" style="name" />
        <Title children={`№${id}`} style="bold" />
      </div>
      <ul className={styles.order__content}>
        {product.map((prod, index) => (
          <li key={index} className={styles.order__product}>
            <a href={`/product/${prod.id}`}>
              <img
                src={prod.picture}
                alt={`Product ${prod.id}`}
                className={styles.order__pictures}
                onError={(e) => {
                  e.currentTarget.src = notImgIcon
                }}
              />
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.order__info}>
        <Title children="Оформлено" style="name" />
        <Title children={date} style="bold" />
        <Title children="На сумму" style="name" />
        <Title children={formatPrice(total)} style="bold" />
      </div>
    </div>
  )
}

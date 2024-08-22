import { memo } from 'react'

import { Rating } from '@mui/material'

import styles from './Product.module.css'
import { Title, formatPrice, noneStar, star } from '@/shared'

import notImgIcon from '@/app/assets/images/no-image.png'

interface IProduct {
  id: string
  title: string
  description: string
  category: string
  price: number
  picture: string
  rating: number
}

export const Product = memo(({ title, price, picture, rating, id }: IProduct) => {
  return (
    <a href={`/product/${id}`}>
      <div className={styles.product}>
        <img
          src={picture}
          alt={title}
          className={styles.product__img}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = notImgIcon
          }}
        />
        <div className={styles.product__info}>
          <Title style="name" children={title} />
          <div>
            <Rating
              value={rating}
              icon={<img src={star} alt="star" />}
              readOnly
              emptyIcon={<img src={noneStar} alt="star" />}
              className={styles.product__rating}
              size="large"
            />
          </div>

          <Title
            className={styles.product__price}
            style="price"
            children={formatPrice(price)}
          />
        </div>
      </div>
    </a>
  )
})

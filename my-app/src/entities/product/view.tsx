import {Rating} from '@mui/material';

import {IProduct, Title, formatPrice, noneStar, star} from '@/shared';

import styles from './view.module.css';


export const Product = ({title, price, picture, rating, id}: IProduct) => {
    return (
        <a href={`/product/${id}`}>
            <div className={styles.product}>
                <img src={picture} alt={title} className={styles.product__img} loading="lazy" />
                <Title style="name" children={title} />
                <Rating
                    value={rating}
                    icon={<img src={star} alt="star" />}
                    readOnly
                    emptyIcon={<img src={noneStar} alt="star" />}
                    className={styles.product__rating}
                />
                <div className={styles.product__price}>
                    <Title style="price" children={formatPrice(price)} />
                </div>
            </div>
        </a>
    );
};

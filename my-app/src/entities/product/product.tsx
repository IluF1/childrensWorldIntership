import { Rating } from '@mui/material';
import noneStar from '@/app/assets/images/Fillness=None.svg';
import star from '@/app/assets/images/Star.svg';
import { Title } from '@/components/ui/title/title';
import { formatPrice } from '@/utils/helpers/formatPrice';
import { IProduct } from '@/utils/interfaces/interfaces';

import styles from './product.module.css';

export const Product = ({ title, price, picture, rating, id }: IProduct) => {
    return (
        <a href={`/product/${id}`}>
            <div className={styles.product}>
                <div className={styles.img}>
                    <img src={picture} alt={title} className={styles.img} />
                </div>
                <Title style="name" children={title} />

                <Rating
                    value={rating}
                    icon={<img src={star} alt="star" />}
                    readOnly
                    emptyIcon={<img src={noneStar} alt="star" />}
                    className={styles.rating}
                />

                <div className={styles.price}>
                    <Title style="price" children={formatPrice(price)} />
                </div>
            </div>
        </a>
    );
};

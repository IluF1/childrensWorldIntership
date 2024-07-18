import styles from './productPage.module.css';
import { Title } from '@/components/ui/title/title';
import star from '@/app/assets/images/Star.svg';
import noneStar from '@/app/assets/images/Fillness=None.svg';
import { Rating } from '@mui/material';
import { formatPrice } from '@/utils/helpers/formatPrice';
import { productId } from '@/utils/constants/constants';
import { useGetProductById } from '@/utils/hooks/useGetProductById';
import { MyButton } from '@/components/ui/button/button';

export const ProductPage = () => {
    const { product } = useGetProductById(Number(productId));

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <img
                    src={product?.picture}
                    alt={product?.title}
                    className={styles.picture}
                />
                <div className={styles.information}>
                    <Title style="bigName" children={product?.title} />
                    <Rating
                        value={Number(product?.rating)}
                        icon={<img src={star} alt="star" />}
                        readOnly
                        emptyIcon={<img src={noneStar} alt="star" />}
                        className={styles.rating}
                    />
                    <div className={styles.price}>
                        <Title
                            style="bigPrice"
                            children={formatPrice(Number(product?.price))}
                        />
                    </div>
                    <div className={styles.addToCartBtn}>
                        <MyButton children='Добавить в корзину'/>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <Title style="bold" children={'Описание'} />

                <div
                    className={styles.description_text}
                    dangerouslySetInnerHTML={{ __html: product?.description }}
                />
            </div>
        </div>
    );
};

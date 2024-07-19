import { Rating } from '@mui/material';

import noneStar from '@/app/assets/images/Fillness=None.svg';
import star from '@/app/assets/images/Star.svg';
import undoImg from '@/app/assets/images/Undo.svg';
import { MyButton } from '@/components/ui/button/button';
import { Title } from '@/components/ui/title/title';
import { productId } from '@/utils/constants/constants';
import { formatPrice } from '@/utils/helpers/formatPrice';
import { useGetProductById } from '@/utils/hooks/useGetProductById';

import styles from './productPage.module.css';

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
                        <MyButton children="Добавить в корзину" />
                    </div>
                    <div className={styles.returnCondition_block}>
                        <Title style="bold">
                            <img
                                src={undoImg}
                                alt="img"
                                className={styles.undoImg}
                            />
                            Условие возврата
                        </Title>
                        <h3 className={styles.returnCondition_text}>
                            Обменять или вернуть товар надлежащего качества
                            можно в течение 14 дней с момента покупки.
                        </h3>
                        <h4 className={styles.pricesMayVary_text}>
                            Цены в интернет-магазине могут отличаться от
                            розничных магазинов.
                        </h4>
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

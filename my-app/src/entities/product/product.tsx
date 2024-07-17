import { Title } from "@/components/ui/title/title";
import styles from "./product.module.css";
import { formatPrice } from "@/utils/helpers/formatPrice";
import { Rating } from "@mui/material";
import star from "@/app/assets/images/Star.svg";
import noneStar from "@/app/assets/images/Fillness=None.svg";
import { redirect } from "react-router-dom";

interface IProduct {
  title: string;
  price: number;
  picture: string;
  rating: number;
}

export const Product = ({ title, price, picture, rating }: IProduct) => {
  return (
    <div className={styles.product} onClick={() => redirect('/product')}>
      <div className={styles.img}>
        <img src={picture} alt={title} className={styles.img}/>
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
  );
};

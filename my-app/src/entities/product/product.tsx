import { Title } from "@/components/ui/title/title";
import styles from "./product.module.css";
import { formatPrice } from "@/utils/helpers/formatPrice";

interface IProduct {
   title: string;
   price: number;
   picture: string;
}

export const Product = ({ title, price, picture }: IProduct) => {
   return (
      <div className={styles.product}>
         <img src={picture} alt={title} className={styles.img} />

         <Title style="name" children={title} />

         <div className={styles.price}>
            <Title style="price" children={formatPrice(price)} />
         </div>
      </div>
   );
};

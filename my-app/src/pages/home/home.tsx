import { useFetch } from "@/utils/hooks/useFetch";
import styles from "./home.module.css";
import { Product } from "@/entities/product/product";

export const Home = () => {
   const { data } = useFetch();

   return (
      <div className={styles.container}>
         <ul className={styles.products_list}>
            {data.map(product => (
               <li key={product.id} className={styles.element}>
                  <Product
                     price={product.price}
                     title={product.title}
                     picture={product.picture}
                  />
               </li>
            ))}
         </ul>
      </div>
   );
};

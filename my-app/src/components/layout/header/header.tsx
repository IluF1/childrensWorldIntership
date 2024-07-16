import { HeaderElement } from '@/components/ui/headerElement/headerElement'
import styles from './header.module.css'
import logo  from '@/app/assets/images/Logo.svg' 
import { Title } from '@/components/ui/title/title';
import cartImg from '@/app/assets/images/Cart.svg'

export const Header = () => {
    return (
       <div className={styles.container}>
          <img src={logo} alt="logo" />
          <ul className={styles.listPages}>
             <li>
                <HeaderElement link="/" children="Товары" />
             </li>
             <li>
                <HeaderElement link="/orders" children="Заказы" />
             </li>
          </ul>
          <div className={styles.cart_block}>
             <button className={styles.cart}>
                <img src={cartImg} alt="cart" className={styles.cart_img}/>
                <Title children="Корзина (0)" style="bold" />
             </button>
          </div>
       </div>
    );
}
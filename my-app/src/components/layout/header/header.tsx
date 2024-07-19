import cartImg from '@/app/assets/images/Cart.svg';
import logo from '@/app/assets/images/Logo.svg';
import { HeaderElement } from '@/components/ui/headerElement/headerElement';
import { Title } from '@/components/ui/title/title';

import styles from './header.module.css';

export const Header = () => {
    return (
        <div className={styles.container}>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
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
                    <img src={cartImg} alt="cart" className={styles.cart_img} />
                    <Title children="Корзина (0)" style="bold" />
                </button>
            </div>
        </div>
    );
};

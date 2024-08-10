import {memo, useState} from 'react';

import {HeaderElement, Title, cartImg, logo, useAppSelector} from '@/shared';
import {Cart} from '@/widgets/Cart/Cart';

import styles from './Header.module.css';

export const Header = memo(() => {
    const [active, setActive] = useState<boolean>(false);
    const amount = useAppSelector((state) => state.cart.amount);
    return (
        <header className={styles.header}>
            <a href="/" className={styles['header__logo']}>
                <img src={logo} alt="logo" className={styles['header__logo-img']} />
            </a>
            <ul className={styles['header__list-pages']}>
                <li className={styles['header__list-item']}>
                    <HeaderElement link="/" children="Товары" />
                </li>
                <li className={styles['header__list-item']}>
                    <HeaderElement link="/orders" children="Заказы" />
                </li>
            </ul>
            <div className={styles['header__cart']}>
                <button className={styles['header__cart-btn']} onClick={() => setActive(!active)}>
                    <img src={cartImg} alt="cart" className={styles['header__cart-img']} />
                    <Title children={`Корзина (${amount})`} style="bold" />
                </button>
            </div>
            {active && <Cart active={active} setActive={setActive} />}
            <div className={styles.header__burger}></div>
        </header>
    );
});

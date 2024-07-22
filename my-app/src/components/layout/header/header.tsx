import { useState } from 'react';

import cartImg from '@/app/assets/images/Cart.svg';
import logo from '@/app/assets/images/Logo.svg';
import { HeaderElement } from '@/components/ui/headerElement/headerElement';
import { Title } from '@/components/ui/title/title';
import { Cart } from '@/entities/cart/cart';

import styles from './header.module.css';

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  const totalQuantity = 0;

  return (
    <div className={styles.header}>
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
        <button
          className={styles['header__cart-btn']}
          onClick={() => setActive(!active)}
        >
          <img
            src={cartImg}
            alt="cart"
            className={styles['header__cart-img']}
          />
          <Title children={`Корзина (${totalQuantity})`} style="bold" />
        </button>
      </div>
      {active && <Cart active={active} setActive={setActive} />}
    </div>
  );
};

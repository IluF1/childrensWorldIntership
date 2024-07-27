import { minus, plus } from '@/shared';
import styles from './button.module.css';
import { Title } from '@/shared/ui/title/title';
import { useState } from 'react';

export const CartButton = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <div className={styles.button}>
      <button
        onClick={() => setCount(count + 1)}
        className={styles.button__plus}
      >
        <img src={plus} alt="plus" />
      </button>
      <Title children={count} style="bold" />
      <button
        onClick={() => (count === 0 ? null : setCount(count - 1))}
        className={styles.button__minus}
      >
        <img src={minus} alt="minus" />
      </button>
    </div>
  );
};

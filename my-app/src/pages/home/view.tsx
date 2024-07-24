import { useState } from 'react';

import { Product } from '@/entities/product/view';
import { currentUrl } from '@/features/utils/constants/constants';
import { StyledPagination } from '@/pages/home/components/ui/pagination/pagination';

import { useGetProducts } from './components/hooks/useGetProducts';
import { useSetParam } from './components/hooks/useSetParams';
import styles from './view.module.css';

export const Home = () => {
  const [page, setPage] = useState<number>(
    Number(currentUrl.searchParams.get('page')) || 1,
  );
  useSetParam('page', String(page));

  const { data } = useGetProducts(page);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.home}>
      <ul className={styles.home__products}>
        {data.map(product => (
          <li key={product.id} className={styles.home__products_item}>
            <Product
              id={product.id}
              price={product.price}
              title={product.title}
              rating={Number(product.rating)}
              picture={product.picture}
            />
          </li>
        ))}
      </ul>
      <div className={styles.home__pagination}>
        <StyledPagination
          count={10}
          shape="rounded"
          page={Number(currentUrl.searchParams.get('page'))}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

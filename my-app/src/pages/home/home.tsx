import { useFetch } from '@/utils/hooks/useFetch';
import styles from './home.module.css';
import { Product } from '@/entities/product/product';
import { useState } from 'react';
import { StyledPagination } from '@/utils/helpers/styledPagination';
import { useSetParam } from '@/utils/hooks/useSetParams';
import { currentUrl } from '@/utils/constants/constants';

export const Home = () => {
    const [page, setPage] = useState<number>(
        Number(currentUrl.searchParams.get('page')) || 1,
    );
    useSetParam('page', String(page));

    const { data } = useFetch(page);

    const handleChange = (
        _event: React.ChangeEvent<unknown>,
        value: number,
    ) => {
        setPage(value);
    };

    return (
        <div className={styles.container}>
            <ul className={styles.products_list}>
                {data.map(product => (
                    <li key={product.id} className={styles.element}>
                        <Product
                            price={product.price}
                            title={product.title}
                            rating={Number(product.rating)}
                            picture={product.picture}
                        />
                    </li>
                ))}
            </ul>
            <div className={styles.pagination}>
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

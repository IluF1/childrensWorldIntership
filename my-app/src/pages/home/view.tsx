import {useState} from 'react';

import {PaginationItem} from '@mui/material';

import {useGetProducts} from '../../features/hooks/useGetProducts';
import {useSetParam} from '../../features/hooks/useSetParams';

import {ArrowLeftIcon, ArrowRightIcon} from './ui/icons';

import {StyledPagination} from '@/pages/home/ui/pagination/pagination';
import {Product, currentUrl} from '@/shared';

import styles from './view.module.css';

export const Home = () => {
    const [page, setPage] = useState<number>(Number(currentUrl.searchParams.get('page')) || 1);
    useSetParam('page', String(page));

    const {data} = useGetProducts(page);

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <div className={styles.home}>
            <ul className={styles.home__products}>
                {data.map((product) => (
                    <li key={product.id} className={styles.home__products_item}>
                        <Product
                            id={product.id}
                            price={product.price}
                            title={product.title}
                            rating={Number(product.rating)}
                            picture={product.picture}
                            description=""
                            category=""
                        />
                    </li>
                ))}
            </ul>
            <div className={styles.home__pagination}>
                <StyledPagination
                    count={10}
                    shape="rounded"
                    page={page}
                    onChange={handleChange}
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            components={{
                                previous: ArrowLeftIcon,
                                next: ArrowRightIcon,
                            }}
                        />
                    )}
                />
            </div>
        </div>
    );
};

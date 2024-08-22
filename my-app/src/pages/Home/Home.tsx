import { useEffect, useState } from 'react'

import { CircularProgress, PaginationItem } from '@mui/material'

import { useSetParam } from '../../features/Hooks/useSetParams'

import { ArrowLeftIcon, ArrowRightIcon } from './ui/icons'

import styles from './Home.module.css'
import { StyledPagination } from '@/pages/Home/ui/pagination/pagination'
import { Product, currentUrl, useAppDispatch, useAppSelector } from '@/shared'
import { fetchProducts } from '@/features/Api/Api'

export function Home() {
  const [page, setPage] = useState<number>(Number(currentUrl.searchParams.get('page')) || 1)
  useSetParam('page', String(page))
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts(page))
  }, [page])

  const data = useAppSelector(state => state.products.products)
  const total = useAppSelector(state => state.products.total)

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <div className={styles.home}>
      {data
        ? (
            <>
              <ul className={styles.home__products}>
                {data.map(product => (
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
                  count={Math.ceil(total / 15)}
                  shape="rounded"
                  page={page}
                  onChange={handleChange}
                  renderItem={item => (
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
            </>
          )
        : (
            <div className={styles.loader}>
              <CircularProgress color="secondary" />
            </div>
          )}
    </div>
  )
}

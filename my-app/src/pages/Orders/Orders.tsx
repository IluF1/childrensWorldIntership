import { useEffect, useState } from 'react'

import { PaginationItem } from '@mui/material'

import { ArrowLeftIcon, ArrowRightIcon } from '../Home/ui/icons'
import { StyledPagination } from '../Home/ui/pagination/pagination'

import styles from './Orders.module.css'
import { Order } from '@/entities/Order/Order'
import { useSetParam } from '@/features/Hooks/useSetParams'
import { Title, currentUrl, useAppDispatch, useAppSelector } from '@/shared'
import { fetchOrders } from '@/features/Api/Api'

export function Orders() {
  const [page, setPage] = useState<number>(Number(currentUrl.searchParams.get('page')) || 1)
  useSetParam('page', String(page))
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchOrders(page))
  }, [page])
  const total = useAppSelector(state => state.orders.total)
  const orders = useAppSelector(state => state.orders.orders)

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <div>
      {orders.length
        ? (
            <>
              <ul className={styles.orders}>
                {orders.map((orderGroup, groupIndex) => (
                  <li key={groupIndex} className={styles.orderGroup}>
                    <Order
                      total={orderGroup.reduce(
                        (acc, item) => acc + item.product.price * item.quantity,
                        0,
                      )}
                      id={orderGroup[0].product.id}
                      created={orderGroup[0].createdAt}
                      product={orderGroup.map(item => item.product)}
                    />
                  </li>
                ))}
              </ul>
              {total < 11
                ? null
                : (
                    <StyledPagination
                      className={styles.orders__pagination}
                      count={Math.ceil(total / 10)}
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
                  )}
            </>
          )
        : (

            <Title style="bold" className={styles.orders__no_orders}>
              У вас пока нет заказов
            </Title>

          )}
    </div>
  )
}

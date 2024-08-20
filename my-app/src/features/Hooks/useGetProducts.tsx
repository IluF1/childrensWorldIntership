import { useEffect, useState } from 'react'

import type { IProduct } from '@/shared'
import { baseUrl, instance } from '@/shared'

interface IProducts {
  data: IProduct[]
  meta: {
    total: number
  }
}

export function useGetProducts(page: number) {
  const url = `${baseUrl}products?page=${page}&limit=15`
  const [data, setData] = useState<IProduct[]>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    instance
      .get<IProducts>(url)
      .then((res) => {
        setData(res.data.data)
        setTotal(res.data.meta.total)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }, [page])

  return { data, total }
}

import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import type { IProduct } from '@/shared'
import { instance } from '@/shared'

export function useGetProductById(id: number) {
  const url = `/products/${id}`
  const [card, setCard] = useState<IProduct | undefined>(undefined)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await instance.get(url)
        setCard(response.data)
      }
      catch (error) {
        navigate('*')
        console.error(error)
      }
    }

    fetchProduct()
  }, [url, navigate])

  return { card }
}

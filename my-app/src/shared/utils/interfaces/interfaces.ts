export interface IProduct {
  id: string
  title: string
  description: string
  category: string
  price: number
  picture: string
  rating: number
}
export interface ICartData {
  product: {
    id: string
    title: string
    description: string
    category: string
    price: string
    picture: string
    rating: string
  }
  quantity: number
  createdAt?: string
}

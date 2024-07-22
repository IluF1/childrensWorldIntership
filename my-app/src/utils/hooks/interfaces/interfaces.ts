export interface IData {
  id: number;
  title: string;
  description: string;
  price: number;
  picture: string;
  rating: string;
}

export interface ICartData {
  quantity: number;
  product: {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    picture: string;
    rating: string;
  };
}

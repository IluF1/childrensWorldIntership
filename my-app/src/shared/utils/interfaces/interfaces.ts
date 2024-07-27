import { ICartData } from '@/entities/cart/model/interfaces';

export interface IData {
  data: {
    quantity: number;
    id: string;
  };
}
export interface IInitialState {
  cart: ICartData[];
  amount: number;
}
export interface IProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  picture: string;
  rating: number;
}

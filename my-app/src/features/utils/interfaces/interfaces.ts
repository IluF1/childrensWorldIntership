import { ICartData } from "@/entities/cart/components/interfaces";

export interface IData {
  quantity: number
  id: string;
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

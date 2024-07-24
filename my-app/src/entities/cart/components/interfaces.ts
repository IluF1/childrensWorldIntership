export interface ICart {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
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

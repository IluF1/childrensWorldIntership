export interface ICart {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICartData {
  product: {
    id: string;
    title: string;
    description: string;
    category: string;
    price: string;
    picture: string;
    rating: string;
  };
  quantity: number;
  createdAt?: string;
}

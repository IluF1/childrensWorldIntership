import { useEffect, useState } from 'react';

import axios from 'axios';
import {IProduct } from '@/features/utils/interfaces/interfaces';



export const useGetProductById = (id: number) => {
  const url = `https://skillfactory-task.detmir.team/products/${id}`;
  const [card, setCard] = useState<IProduct>(); // Изменить на IProduct
  useEffect(() => {
    axios.get(url).then(res => setCard(res.data));
  }, [id]);

  return { card };
};

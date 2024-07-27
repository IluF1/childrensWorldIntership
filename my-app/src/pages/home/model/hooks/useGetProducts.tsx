import { useEffect, useState } from 'react';

import axios from 'axios';
import { IProduct } from '@/shared';



export const useGetProducts = (page: number) => {
  const url = `https://skillfactory-task.detmir.team/products?page=${page}&limit=15`;
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    axios.get(url).then(res => setData(res.data.data));
  }, [page]);

  return { data };
};

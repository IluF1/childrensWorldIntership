import { useEffect, useState } from 'react';

import axios from 'axios';

import { ICartData } from './interfaces/interfaces';

export const useGetStateCart = () => {
  const url = 'https://skillfactory-task.detmir.team/cart';
  const [data, setData] = useState<ICartData[]>([]);
  useEffect(() => {
    axios.get(url).then(res => setData(res.data));
  }, []);

  return { data };
};

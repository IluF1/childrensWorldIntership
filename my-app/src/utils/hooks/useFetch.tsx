import axios from "axios";
import { useEffect, useState } from "react";

interface IData {
  id: number;
  title: string;
  description: string;
  price: number;
  picture: string;
  rating: string;
}

export const useFetch = (page: number) => {
  const url = `https://skillfactory-task.detmir.team/products?page=${page}&limit=15`;
  const [data, setData] = useState<IData[]>([]);
  const [link, setLink] = useState<string>("");
  useEffect(() => {
    axios.get(url).then(res => setData(res.data.data));

    setLink(
      `https://skillfactory-task.detmir.team/products?page=${page}&limit=15`
    );
  }, [page]);

  return { data, link };
};

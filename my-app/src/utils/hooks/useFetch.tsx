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

export const useFetch = () => {
   const url = "https://skillfactory-task.detmir.team/products?page=1&limit=15";
   const [data, setData] = useState<IData[]>([]);
   useEffect(() => {
      const fetchData = async () => {
         await axios.get(url).then(res => setData(res.data.data));
      };
      fetchData();
   }, []);

   return { data };
};

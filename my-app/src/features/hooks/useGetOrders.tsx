// import { useEffect, useState } from 'react';

// interface IProduct {
//   id: string;
//   title: string;
//   description: string;
//   category: string;
//   price: number;
//   picture: string;
//   rating: number;
// }

// interface IData {
//   product: IProduct;
//   quantity: number;
//   createdAt: string;
// }

// interface IOrders {
//   meta: {
//     count: number;
//     total: number;
//   };
//   data: IData[];
// }

// export const useGetOrders = (page: number) => {
//   const url = `https://skillfactory-task.detmir.team/orders?page=${page}&limit=10`;
//   const [data, setData] = useState<IOrders | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(url, {
//           method: 'GET',
//           credentials: 'include',
//         });

//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const result: IOrders = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return {
//     data,
//     loading,
//     error,
//   };
// };

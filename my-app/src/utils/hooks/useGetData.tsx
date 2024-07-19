import { useEffect, useState } from 'react';

import axios from 'axios';

import { IData } from '../interfaces/interfaces';

export const useGetData = (page: number) => {
    const url = `https://skillfactory-task.detmir.team/products?page=${page}&limit=15`;
    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        axios.get(url).then(res => setData(res.data.data));
    }, [page]);

    return { data };
};

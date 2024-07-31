import {useEffect, useState} from 'react';

import axios from 'axios';

export const useGetOrders = (limit: number, page: number) => {
    const url = `https://skillfactory-task.detmir.team/orders?page=${page}&limit=${limit}`;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => setData(res.data));
    }, [url]);

    return {
        data,
    };
};

import { useEffect, useState } from 'react';
import { IData } from '../interfaces/interfaces';
import axios from 'axios';

export const useGetProductById = (id: number) => {
    const url = `https://skillfactory-task.detmir.team/products/${id}`;
    const [product, setProduct] = useState<IData>();
    useEffect(() => {
        axios.get(url).then(res => setProduct(res.data));
    }, [id]);

    return { product };
};

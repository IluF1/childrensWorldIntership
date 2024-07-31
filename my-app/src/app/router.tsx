import {useEffect} from 'react';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import {useAppDispatch} from './store';

import {fetchCartData} from '@/features/cart/model/api/api';
import {Home} from '@/pages/home/view';
import {ProductPage} from '@/pages/productPage/view';

// eslint-disable-next-line no-implicit-globals
export function ReactRouter() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

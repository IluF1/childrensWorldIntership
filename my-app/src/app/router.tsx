import {useEffect} from 'react';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import {fetchCartData} from '@/features/api/api';
import {Home} from '@/pages/home/view';
import {Orders} from '@/pages/orders/view';
import {ProductPage} from '@/pages/productPage/view';
import {useAppDispatch} from '@/shared';

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
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </Router>
    );
}

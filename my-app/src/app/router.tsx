import {useEffect} from 'react';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import {fetchCartData} from '@/features/Api/Api';
import {ErrorPage} from '@/pages/Error/Error';
import {Home} from '@/pages/Home/Home';
import {Orders} from '@/pages/Orders/Orders';
import {ProductPage} from '@/pages/ProductPage/ProductPage';
import {useAppDispatch} from '@/shared';

// eslint-disable-next-line no-implicit-globals
export const ReactRouter = () => {
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
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

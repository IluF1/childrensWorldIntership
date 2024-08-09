// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/order
import './assets/styles/reset.css';
// eslint-disable-next-line import/order
import './assets/styles/index.css';

import {Provider} from 'react-redux';

import {ReactRouter} from './router';

import {Store} from '@/app/store';
import {Header} from '@/shared';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={Store}>
        <Header />
        <ReactRouter />
    </Provider>,
);

import ReactDOM from 'react-dom/client'

import './assets/styles/reset.css'
import './assets/styles/index.css'

import { Provider } from 'react-redux'

import { ReactRouter } from './router'

import { Store } from '@/app/store'
import { Header } from '@/shared'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={Store}>
    <Header />
    <ReactRouter />
  </Provider>,

)

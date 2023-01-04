import React from 'react'
import zhCN from 'antd/locale/zh_CN'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/app/store'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'

import Routers from '@/router'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            {Routers()}
          </Router>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

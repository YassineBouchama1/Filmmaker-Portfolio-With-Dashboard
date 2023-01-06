import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { store } from './Redux/store/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Provider store={store}>
    <ProSidebarProvider>
    <App />
    </ProSidebarProvider>
    </Provider>
    </React.StrictMode>
)

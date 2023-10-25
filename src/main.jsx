import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/css/soft-ui-dashboard.min.css'
import './assets/css/soft-ui-dashboard.css'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import Signin from './pages/signin/signin.jsx';
import Signup from './pages/signup/signup.jsx';
import Dashboard from './pages/dashboard/dashboard.jsx';
import { store } from './state/store.js';
import Products from './pages/products/products.jsx';
import Product from './pages/products/product.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

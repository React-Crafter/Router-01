import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/home/Home.jsx'
import Blog from './Components/Blog/Blog.jsx'
import About from './Components/About/About.jsx'
import Product from './Components/Products/Product.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/Home",
        element: <Home></Home>
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
      {
        path: '/About',
        element: <About></About>
      },
      {
        path: '/Products',
        element: <Product></Product>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SeaFood from './components/SeaFood/SeaFood'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'
import Meats from './components/Meats/Meats'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/meats',
          element: <Meats />
        },
        {
          path: '/seafood',
          element: <SeaFood />
        },
        {
          path: '/allproducts',
          element: <AllProducts />
        }
      ]
    },
  ])

  return <RouterProvider router={router} />
}

export default App
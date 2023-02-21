import React from 'react';
import './App.scss';
// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import HomePage from './pages/HomePage';
import ProductsPage, { productsPageLoader } from './pages/ProductsPage';
import ProductInfoPage, { productLoader } from './pages/ProductInfoPage';
import AppLayout from './components/Layout/AppLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/products',
                element: <ProductsPage />,
                loader: productsPageLoader,
            },
            {
                path: '/products/view',
                element: <ProductInfoPage />,
                loader: productLoader,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;

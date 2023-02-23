import React from 'react';
import axios from 'axios';
import { useLoaderData, useNavigation } from 'react-router-dom';
import styles from './ProductsPage.module.scss';
import ProductCard from '../components/ProductCard';
import API from '../utils/api';
import { ThreeCircles } from 'react-loader-spinner';
const ProductsPage = () => {
    const products = useLoaderData();

    return (
        <div className={styles['container']}>
            {products.map((product) => (
                <ProductCard key={product._id} {...product} />
            ))}
        </div>
    );
};

export default ProductsPage;

export const productsPageLoader = async () => {
    const url = import.meta.env.VITE_BACKEND_URL;

    const resp = await API.getAllProducts();
    // console.log(resp);
    const allProducts = resp.data.data.products;
    return allProducts;
};

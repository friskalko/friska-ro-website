import React from 'react';
import axios from 'axios';
import { useLoaderData, useNavigation } from 'react-router-dom';
import styles from './ProductsPage.module.scss';
import ProductCard from '../components/ProductCard';
import API from '../utils/api';
const ProductsPage = () => {
    const navigation = useNavigation();
    const products = useLoaderData();
    console.log(products);
    console.log(navigation);
    if (navigation.state == 'loading') return <h1>LOADING</h1>;
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
    const allProducts = resp.data.data.products;
    // console.log(allProducts);
    return allProducts;
};

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './ProductInfoPage.module.scss';
import Specifications from '../components/Specifications';
import API from '../utils/api';

import ImageSlider from '../components/ImageSlider';
const ProductInfoPage = () => {
    const product = useLoaderData();

    const images = [product.imageCover];
    images.push(
        'https://images.unsplash.com/photo-1677061857086-8175847f19fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    );
    images.push(
        'https://images.unsplash.com/photo-1676963472951-04a8c0f1f3fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    );

    return (
        <div className={styles['container']}>
            <div className={styles['main-container']}>
                <div className={styles['main-container__img']}>
                    <ImageSlider images={images} />
                </div>
                <div className={styles['main-container__info']}>
                    <div>{product.name}</div>
                    <div className={styles['summary']}> {summ}</div>
                </div>
            </div>
            <div className={styles['description']}>
                <h2 className={styles['description__heading']}>
                    Product Description
                </h2>
                <p className={styles['description__text']}>
                    {product.description} Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quisquam, est labore
                    repudiandae ullam dignissimos veritatis unde quos officia
                    sit facilis vel rerum laudantium iusto culpa! Placeat nisi
                    laboriosam quasi non.
                </p>
            </div>
            <div className={styles['specs-container']}>
                <Specifications properties={product.properties} />
            </div>
        </div>
    );
};

const summ = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
export default ProductInfoPage;

export const productLoader = async ({ request }) => {
    const url = new URL(request.url);

    const productID = url.searchParams.get('id');
    const resp = await API.getOneProduct(productID);
    const product = resp.data.data.product;

    return product;
};

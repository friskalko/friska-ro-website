import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import styles from './ProductInfoPage.module.scss';
import { ThreeCircles } from 'react-loader-spinner';
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
            {/* <ul>
                <li>{product._id}</li>
                <li>{product.description}</li>
              
            </ul> */}
            <div className={styles['main-container']}>
                <div className={styles['main-container__img']}>
                    <ImageSlider images={images} />
                </div>
                <div className={styles['main-container__info']}>
                    <div>{product.name}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfoPage;

export const productLoader = async ({ request }) => {
    // const productID = request.url.searchParams.get('productID');
    // console.log(productID);
    const url = new URL(request.url);

    const productID = url.searchParams.get('id');
    const resp = await API.getOneProduct(productID);
    const product = resp.data.data.product;
    // console.log(resp.data.data);
    return product;
};

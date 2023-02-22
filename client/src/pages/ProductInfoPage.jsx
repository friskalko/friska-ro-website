import React from 'react';
import styles from './ProductInfoPage.module.scss';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import API from '../utils/api';
const ProductInfoPage = () => {
    const product = useLoaderData();
    // console.log(product);

    const navigation = useNavigation();

    if (navigation.state == 'loading')
        return (
            <div className={styles['loading-spinner']}>
                <ThreeCircles
                    height="100"
                    width="100"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor="#1e3a8a"
                    innerCircleColor="#1497be"
                    middleCircleColor="#1e3a8a"
                />
            </div>
        );

    return (
        <div>
            <ul>
                <li>{product._id}</li>
                <li>{product.description}</li>
                {/* <li></li>
                <li></li> */}
            </ul>
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

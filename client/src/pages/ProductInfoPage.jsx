import React from 'react';
import { useLoaderData } from 'react-router-dom';
import API from '../utils/api';
const ProductInfoPage = () => {
    const product = useLoaderData();
    // console.log(product);
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

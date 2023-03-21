import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import logo from '../assets/aqua-logo-small.jpg';
const ProductCard = ({ _id, name, description, imageCover }) => {
    const navigate = useNavigate();

    const readMoreHandler = () => {
        // navigate("/p")
    };

    return (
        <div className={styles['main-container']}>
            <div className={styles['container']}>
                <div className={styles['container__image']}>
                    <img src={imageCover} alt="Product" />
                </div>
                <div className={styles['container__name']}>{name}</div>
                <div
                    className={styles['container__read-more']}
                    onClick={() => navigate(`/products/view?id=${_id}`)}
                >
                    {/* <Link
                        to={`/products/view?id=testProduct`}
                        // className={styles['link']}
                    > */}
                    Read More
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

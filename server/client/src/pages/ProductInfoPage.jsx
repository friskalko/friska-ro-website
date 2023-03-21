import React, { useState, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './ProductInfoPage.module.scss';
import Specifications from '../components/Specifications';
import API from '../utils/api';
import { Modal, Box } from '@mui/material';
import ImageSlider from '../components/ImageSlider';
const ProductInfoPage = () => {
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const countryRef = useRef(null);
    const descriptionRef = useRef(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const product = useLoaderData();
    console.log(product);
    const images = [product.imageCover];
    // images.push(
    //     'https://images.unsplash.com/photo-1677061857086-8175847f19fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    // );
    // images.push(
    //     'https://images.unsplash.com/photo-1676963472951-04a8c0f1f3fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    // );
    // for (let i = 0; i < images.length; i++) {
    //     let temp = images[i];
    //     const start = temp.indexOf('/d/') + 3;
    //     const end = temp.indexOf('/view');
    //     const id = temp.slice(start, end);
    //     images[i] = `https://drive.google.com/uc?export=view&id=${id}`;
    // }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(nameRef, emailRef, phoneRef, descriptionRef);
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['main-container']}>
                    <div className={styles['main-container__img']}>
                        <ImageSlider images={images} />
                    </div>
                    <div className={styles['main-container__info']}>
                        <div>{product.name}</div>
                        <div className={styles['summary']}>
                            {product.category}
                        </div>
                        {/* <h2 className={styles['category']}> {summ}</h2> */}
                        <button
                            className={styles['send-enquiry']}
                            onClick={handleOpen}
                        >
                            Send Enquiry
                        </button>
                    </div>
                </div>
                <div className={styles['description']}>
                    <h2 className={styles['description__heading']}>
                        Product Description
                    </h2>
                    <p className={styles['description__text']}>
                        {product.description}
                    </p>
                </div>
                <div className={styles['specs-container']}>
                    <Specifications properties={product.properties} />
                </div>
            </div>

            <Modal
                sx={{ backdropFilter: 'blur(10px)' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles['modal-heading']}>Enquiry Form</div>
                    <form
                        className={styles['form']}
                        onSubmit={formSubmitHandler}
                    >
                        <div className={styles['form__group']}>
                            <label htmlFor="">
                                Name{' '}
                                <span className={styles['red-star']}>*</span>
                            </label>
                            <input
                                placeholder="Enter Name"
                                ref={nameRef}
                                required
                                type="text"
                            />
                        </div>
                        <div className={styles['form__group']}>
                            <label htmlFor="">
                                Country{' '}
                                <span className={styles['red-star']}>*</span>
                            </label>
                            <input
                                placeholder="Enter Country eg. India"
                                ref={countryRef}
                                required
                                type="text"
                            />
                        </div>
                        <div className={styles['form__group']}>
                            <label htmlFor="">
                                Phone Number{' '}
                                <span className={styles['red-star']}>*</span>
                            </label>
                            <input
                                placeholder="Enter Phone"
                                ref={phoneRef}
                                required
                                type="text"
                            />
                        </div>
                        <div className={styles['form__group']}>
                            <label htmlFor="">Email Address</label>
                            <input
                                placeholder="Enter email"
                                name={emailRef}
                                type="email"
                            />
                        </div>
                        <div className={styles['form__group']}>
                            <label ref={descriptionRef} htmlFor="">
                                Description
                            </label>

                            <textarea name="" id=""></textarea>
                        </div>
                        <div className={styles['form__group--submit']}>
                            <button
                                type="submit"
                                className={styles['submit-btn']}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: '#eeefff',

    // border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 5,
};

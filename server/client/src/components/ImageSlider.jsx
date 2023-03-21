import React from 'react';
import styles from './ImageSlider.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        fade: true,
    };
    return (
        <>
            <div className={styles['imgslider']}>
                <Slider {...settings}>
                    {images.map((item) => (
                        <div className="" key={item}>
                            <img
                                src={item}
                                alt={item}
                                className={styles['slider-image']}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};
export default ImageSlider;

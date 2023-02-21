import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/aqua-logo-small.jpg';
const Footer = () => {
    return (
        <div className={styles['container']}>
            <footer className={styles['footer']}>
                <div className={styles['footer__image-container']}>
                    <img src={logo} alt="G1 Aqua Logo" />
                </div>
                <div className={styles['footer__name']}>
                    R-Tech Systems and Services
                </div>
            </footer>
        </div>
    );
};

export default Footer;

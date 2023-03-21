import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import styles from './ContactPage.module.scss';
const ContactPage = () => {
    return (
        <>
            <div className={styles['contact-container']}>
                <h1 className={styles['contact-heading']}>Contact Us</h1>
                <h2 className={styles['name-heading']}>
                    {'(Proprietor)'}
                    <br />
                    Ramendra Prasad Verma
                </h2>
                <div className={styles['contact-content']}>
                    <div className={styles['contact-item-container']}>
                        <div className={styles['contact-icon']}>
                            <FaMapMarkedAlt />
                        </div>
                        <div className={styles['contact-text']}>
                            41B kh, Jankipuram Garden, Sector D, Jankipuram,
                            Lucknow, Uttar Pradesh 226021
                        </div>
                    </div>
                    <div className={styles['contact-item-container']}>
                        <div className={styles['contact-icon']}>
                            <FaPhoneAlt />
                        </div>
                        <div className={styles['contact-text']}>
                            +91 9415022697 <br />
                            +91 7007629445
                        </div>
                    </div>
                    <div className={styles['contact-item-container']}>
                        <div className={styles['contact-icon']}>
                            <FaEnvelope />
                        </div>
                        <div className={styles['contact-text']}>
                            ramendralko@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;

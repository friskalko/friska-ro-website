import React from 'react';
import styles from './InfoCard.module.scss';

const InfoCard = ({ name, content }) => {
    return (
        <div className={styles['card']}>
            <div className={styles['card-inner']}>
                <div className={styles['card-inner__heading']}>{name}</div>
                <div className={styles['card-inner__content']}>{content}</div>
            </div>
        </div>
    );
};

export default InfoCard;

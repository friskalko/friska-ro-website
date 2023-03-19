import React from 'react';
import styles from './Header.module.scss';
import MainNavigation from '../MainNavigation';
const Header = () => {
    return (
        <div className={styles['container']}>
            <header className={styles['header']}>
                <MainNavigation />
            </header>
        </div>
    );
};

export default Header;

import React from 'react';
import styles from './MainNavigation.module.scss';
import { NavLink } from 'react-router-dom';
const MainNavigation = () => {
    return (
        <div className={styles['container']}>
            <nav className={styles['nav']}>
                <ul className={styles['nav-list']}>
                    <li className={styles['nav-list-item']}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? styles['link-active'] : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles['nav-list-item']}>
                        <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                                isActive ? styles['link-active'] : undefined
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className={styles['nav-list-item']}>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? styles['link-active'] : undefined
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MainNavigation;

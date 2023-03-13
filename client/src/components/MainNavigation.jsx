import React, { useState } from 'react';
import styles from './MainNavigation.module.scss';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainNavigation = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className={styles['container']}>
            <Sidebar />
            <nav className={styles['nav']}>
                <h2 className={styles['brand-name']}>G1 Aqua</h2>

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
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? styles['link-active'] : undefined
                            }
                        >
                            Products
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
                            to="/contact-us"
                            className={({ isActive }) =>
                                isActive ? styles['link-active'] : undefined
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MainNavigation;

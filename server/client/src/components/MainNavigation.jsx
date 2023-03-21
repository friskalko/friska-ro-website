import React, { useState } from 'react';
import styles from './MainNavigation.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Drawer } from '@mui/material';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const MainNavigation = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className={styles['container']}>
                <nav className={styles['nav']}>
                    <h2 className={styles['brand-name']}>G1 Aqua</h2>
                    <div
                        className={styles['menu-icon']}
                        onClick={() => setDrawerOpen(true)}
                    >
                        <AiOutlineMenu />
                    </div>
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
            <Drawer
                anchor={'left'}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <div className={styles['sidebar-content']}>
                    <div
                        className={styles['sidebar-close-btn']}
                        onClick={() => setDrawerOpen(false)}
                    >
                        <AiOutlineClose />
                    </div>

                    <div className={styles['sidebar-links']}>
                        <div
                            onClick={() => {
                                navigate('/');
                                setDrawerOpen(false);
                            }}
                            className={styles['sidebar-link']}
                        >
                            Home
                        </div>
                        <div
                            onClick={() => {
                                navigate('/products');
                                setDrawerOpen(false);
                            }}
                            className={styles['sidebar-link']}
                        >
                            Products
                        </div>
                        <div
                            onClick={() => {
                                navigate('/about-us');
                                setDrawerOpen(false);
                            }}
                            className={styles['sidebar-link']}
                        >
                            About Us
                        </div>
                        <div
                            onClick={() => {
                                navigate('/contact-us');
                                setDrawerOpen(false);
                            }}
                            className={styles['sidebar-link']}
                        >
                            Contact Us
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default MainNavigation;

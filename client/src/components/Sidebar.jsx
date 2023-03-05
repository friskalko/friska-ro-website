import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles['sidebar']}>
            <div className={styles['hamburger']}>
                <label htmlFor="sidebar-toggle"></label>
                <input type="checkbox" id="sidebar-toggle" />
            </div>
            <div className={styles['sidebar-content']}></div>
        </div>
    );
};

export default Sidebar;

import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const AppLayout = () => {
    return (
        <>
            <Outlet />

            <Footer />
        </>
    );
};

export default AppLayout;

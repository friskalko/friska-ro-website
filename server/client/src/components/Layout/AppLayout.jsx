import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
const AppLayout = () => {
    const navigation = useNavigation();

    if (navigation.state == 'loading')
        return (
            <div style={layoutStyles}>
                <Header />

                <div style={loadingSpinner}>
                    <ThreeCircles
                        height="100"
                        width="100"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor="#1e3a8a"
                        innerCircleColor="#1497be"
                        middleCircleColor="#1e3a8a"
                    />
                </div>
                <Footer />
            </div>
        );
    return (
        <div style={layoutStyles}>
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
};

const layoutStyles = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
};

const loadingSpinner = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
export default AppLayout;

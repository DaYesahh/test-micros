import React from 'react';
import './index.css';
import { Outlet, useLocation } from 'react-router-dom';
import Container from '@/pages/home/container';
import SideBar from '@/pages/home/sideBar';

const Home = () => {
    const location = useLocation();

    return (
        <div className='home'>
            <SideBar />
            {
                location.pathname === "/son1" ? (<Container />) : (<Outlet />)
            }
        </div>
    );
};

export default Home;
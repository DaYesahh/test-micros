import React from 'react';
import SideBar from '../sideBar';
import './index.css';
import { Outlet } from 'react-router-dom';
import Container from '../container';

const Home = () => {
    const container = document.getElementById("content");
    console.log(container);
    return (
        <div className='home'>
            <SideBar />
            <Container />
            <Outlet />
        </div>
    );
};

export default Home;
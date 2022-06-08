import React from 'react';
import apps from '../../micro/apps';
import { routes } from '../../routes';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import './index.css';

const SideBar = () => {
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
    };

    return (
        <div className='side-bar'>
            {
                routes.map((item: any) => (
                    <Link className='list-item' key={item.key} to={item.path}>{item.name}</Link>
                ))
            }
            {
                apps.map((item: any) => (
                    <Link className='list-item' key={item.name} to={item.activeRule}>{item.nameZh}</Link>
                ))
            }
        </div>
    );
};

export default SideBar;
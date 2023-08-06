import React from 'react';
import SideNav from '../SideNav/SideNav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='lg:flex w-11/12 mx-auto'>
            <div className='lg:w-3/12'>
                <SideNav></SideNav>
            </div>
            <div className='lg:w-8/12'>
              <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;
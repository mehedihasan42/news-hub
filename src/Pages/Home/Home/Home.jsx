import React from 'react';
import SideNav from '../SideNav/SideNav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container lg:flex w-11/12 mx-auto'>
            <div className='w-3/12'>
                <SideNav></SideNav>
            </div>
            <div className='w-8/12'>
              <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;
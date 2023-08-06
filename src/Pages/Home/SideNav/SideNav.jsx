import React from 'react';
import useAllCategoris from '../../../hooks/useAllCategorys';
import {  NavLink } from 'react-router-dom';
import './SideNav.css'

const SideNav = () => {
    const [categoris] = useAllCategoris()
    return (
       <div className=''>
      <div className='text-black text-center lg:text-start mb-6'>
      <h2 className='text-2xl font-bold'>All Categorys</h2>
       <p className=''>Chose category by your interest</p>
       <div className="divider w-32 mx-auto lg:mx-0"></div>
      </div>
        <div className='space-y-2 grid grid-cols-2 lg:grid-cols-1 mb-6'>
            {
                categoris.map(category=><p key={category._id}>
                    <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
                </p>)
            }
        </div>
       </div>
    );
};

export default SideNav;
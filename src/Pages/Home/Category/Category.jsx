import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryCart from './CategoryCart';

const Category = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData()
    return (
        
        <div className='space-y-5'>
         {
            categoryNews.map(news=><CategoryCart key={news._id} news={news}></CategoryCart>)
         }
        </div>
         
    );
};

export default Category;
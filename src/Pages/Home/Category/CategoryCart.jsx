import React from 'react';

const CategoryCart = ({news}) => {
    const handleSaveLater = id =>{
        console.log(id)
    }
    const {_id,title,author,details,image_url} = news;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button 
            onClick={()=>handleSaveLater(_id)}
            className="btn btn-neutral">See Later</button>
          </div>
        </div>
      </div>
    );
};

export default CategoryCart;
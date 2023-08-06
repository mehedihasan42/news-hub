import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const CategoryCart = ({news}) => {
    const {_id,title,author,details,image_url} = news;
    const {user} = useContext(AuthContext)
  
    const handleSaveLater = id =>{
        console.log(id)
        const saveData = {id:_id,email:user.email,title,details,image_url}
            fetch('http://localhost:5000/saveNews',{
                method:"POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveData),
            })
    }
  
   
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button 
            onClick={()=>handleSaveLater(news)}
            className="btn btn-neutral">See Later</button>
          </div>
        </div>
      </div>
    );
};

export default CategoryCart;
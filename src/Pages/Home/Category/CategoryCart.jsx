import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaBookmark } from "react-icons/fa";

const CategoryCart = ({news}) => {
    const {_id,title,author,details,image_url} = news;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
  
    const handleSaveLater = id =>{
        console.log(id)
        if(user){
          Swal.fire({
            title: 'For Later',
            text: "save for watch later",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Save'
          }).then((result) => {
            if (result.isConfirmed) {
              const saveData = {id:_id,email:user.email,title,details,image:image_url}
              fetch('https://news-hub-server-beta.vercel.app/saveNews',{
                  method:"POST",
                  headers:{
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(saveData),
              })
            }
          })
        }
       else{
        Swal.fire({
          title: 'Log In for save news',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Go to, Log In!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login')
          }
        })
       }      
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
            className="btn btn-neutral"><FaBookmark className='text-xl'/>Save News</button>
          </div>
        </div>
      </div>
    );
};

export default CategoryCart;
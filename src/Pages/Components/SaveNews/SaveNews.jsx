import React, { useContext } from 'react';
import useSaveNews from '../../../hooks/useSaveNews';
import { FaTrashAlt } from "react-icons/fa";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SaveNews = () => {
    const [saveNews,refetch] = useSaveNews()
    const {loading} = useContext(AuthContext)

   if(loading){
    return <progress className="progress w-56"></progress>
   }

   const handleDeleteItem = news =>{
        console.log(news._id)
        fetch(`https://news-hub-server-beta.vercel.app/saveNews/${news._id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
          if (result.deletedCount === 1) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            refetch()
          } 
        })
   }

    return (
        <div>
           <h2 className='text-center text-2xl'>Total Save News: {saveNews.length}</h2>
           {
              saveNews.map(news=>
              <div key={news._id} className="card card-compact w-2/3 mx-auto bg-base-100 shadow-xl">
              <figure><img src={news.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{news.title}</h2>
                <p>{news.details}</p>
                <div className="card-actions justify-end">
                  <button 
                  onClick={()=>handleDeleteItem(news)}
                  className="btn btn-neutral"><FaTrashAlt className='text-xl'/> Delete</button>
                </div>
              </div>
            </div>)
           }
        </div>
    );
};

export default SaveNews;
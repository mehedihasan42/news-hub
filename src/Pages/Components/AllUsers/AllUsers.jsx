import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAllUsers from '../../../hooks/useAllUsers';

const AllUsers = () => {
  const {user} = useContext(AuthContext)
   const [users] = useAllUsers()
 
    const handleDelete = user =>{
        fetch(`https://news-hub-server-beta.vercel.app/users/${user._id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result=>{
            console.log(result)
            refetch()
            if (result.deletedCount === 1) {
                Swal.fire({
                    title: 'User deleted successful',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
              }
        })
    } 

    const handleUpdateUser = user =>{
      console.log(user)
      fetch(`https://news-hub-server-beta.vercel.app/users/admin/${user._id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify()
      })

    }

    return (
        <div className='w-2/3 mx-auto'>
          
                <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Name</th>
        <th>User Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index)=>
            <tr key={user._id}>
            <th>{index+1}</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
            {user.name}
            </td>
            <td>{user.email}</td>
            <td>
              {
                user.role === 'admin'? 'admin':
                <button 
                onClick={()=>handleUpdateUser(user)}
                className="btn btn-ghost btn-xs">Update</button>
              }
           
            </td>
            <td>
              <button 
              onClick={()=>handleDelete(user)}
              className="btn btn-ghost btn-xs">Delete</button>
            </td>
          </tr>
            )
      }
    </tbody>
  </table>
</div>
                
           
        </div>
    );
};

export default AllUsers;
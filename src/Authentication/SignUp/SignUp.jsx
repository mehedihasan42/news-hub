import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
  const {createNewUser,sendEmailVerificationCode,updateUserProfile} = useContext(AuthContext)
    const {register,handleSubmit,watch,formState: { errors },} = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)    
        createNewUser(data.email,data.newpass)
        .then(result=>{
          const user = result.user;
          console.log(user)
          updateUserProfile(data.name,data.photo)
          .then(()=>{})
          .then(error=>console.error(error))
          sendEmailVerificationCode(user)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Log In Successful',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/')
        })
        .then(error=>console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-bold my-6">Please Sign Up</h1>
          </div>
          <div className="card w-full mx-auto max-w-2/3 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                {...register("name", { required: true })}
                type="text" placeholder="name" className="input input-bordered" />
                 {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                {...register("email", { required: true })}
                type="email" placeholder="email" className="input input-bordered" />
                 {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input 
                {...register("photo", { required: true })}
                type="photo" placeholder="photo url" className="input input-bordered" />
                 {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input 
                {...register("newpass", { required: true })}
                type="text" placeholder="new password" className="input input-bordered" />
                 {errors.newpass && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-neutral" type="submit" value="Sign Up" />
              </div>
            <p>Already have an account? Please <Link className='text-blue-500' to="/login">Log In</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;
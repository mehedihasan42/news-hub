import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const {login} = useContext(AuthContext)
    const {register,handleSubmit,watch,formState: { errors },} = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)   
        login(data.email,data.pass)
        .then(result=>{
          const user = result.user;
          console.log(user)
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
            <h1 className="text-5xl font-bold my-6">Please Log In</h1>
          </div>
          <div className="card w-full mx-auto min-w-2/3 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input 
                {...register("pass", { required: true })}
                type="password" placeholder="password" className="input input-bordered" />
                 {errors.newpass && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-neutral" type="submit" value="Log In" />
              </div>
              <p>New user? Please <Link className='text-blue-500' to="/signup">Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
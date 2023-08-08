import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate("/")
        })
    }
    return (
        <div className='mx-auto mb-4'>
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
  <FcGoogle className='text-xl'/>
</button>
        </div>
    );
};

export default GoogleLogin;
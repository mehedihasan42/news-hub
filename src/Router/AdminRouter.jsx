import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,adminLoader] = useAdmin()
    const location = useLocation()

    if(loading || adminLoader){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin.admin){
        return children;
    }
    return <Navigate to='/' state={{from:location}} replace ></Navigate>
};

export default AdminRouter;
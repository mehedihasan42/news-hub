import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const {data:isAdmin=[],isLoading:adminLoader} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async()=>{
            const res = await fetch(`https://news-hub-server-beta.vercel.app/users/admin/${user?.email}`)
            return res.json()
        }
    })
    return [isAdmin,adminLoader]
};

export default useAdmin;
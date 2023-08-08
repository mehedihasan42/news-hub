import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllUsers = () => {
    const {data:users=[],refetch:userLoader} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await fetch('https://news-hub-server-beta.vercel.app/users')
            return res.json()
        }
       })

    return [users,userLoader]
};

export default useAllUsers;
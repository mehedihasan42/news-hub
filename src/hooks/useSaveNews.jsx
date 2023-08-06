import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useSaveNews = () => {
    const {user} = useContext(AuthContext)

    const {data:saveNews=[],refetch} = useQuery({
        queryKey: ['saveNews'],
        queryFn:async()=>{
            const res = await fetch(`https://news-hub-server-beta.vercel.app/saveNews?email=${user?.email}`)
            return res.json()
        }
    })

    return [saveNews,refetch]
};

export default useSaveNews;
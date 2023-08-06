import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllCategoris = () => {
    const {data:categoris =[]} = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
          const res = await fetch('https://news-hub-server-beta.vercel.app/category')
          return res.json();
        },
      })
      
    return [categoris]
};

export default useAllCategoris;
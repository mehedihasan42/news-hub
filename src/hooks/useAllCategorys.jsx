import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllCategoris = () => {
    const {data:categoris =[]} = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/category')
          return res.json();
        },
      })
      
    return [categoris]
};

export default useAllCategoris;
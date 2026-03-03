import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axiosinstance from '../api/axiosinstance.js';
export default function useCategories(limit=4) {
    const getCategories = async()=>{
    
    const response =await axiosinstance.get(`/Categories?limit=${limit}`

    );
    return response.data;
    }
    
    const query = useQuery({
        queryKey: ['categories','en',limit],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
    
  return query;
}

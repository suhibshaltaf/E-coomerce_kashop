import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axiosinstance from '../api/axiosinstance.js';
export default function useCategories() {
    const getCategories = async()=>{
    
    const response =await axiosinstance.get(`/Categories`

    );
    return response.data;
    }
    
    const query = useQuery({
        queryKey: ['categories','en'],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
    
  return query;
}

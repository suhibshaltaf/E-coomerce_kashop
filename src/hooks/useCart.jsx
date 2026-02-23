import { useQuery } from '@tanstack/react-query';
import React from 'react'
import authAxiosinstance from '../api/authAxiosinstance.js';

export default function useCart() {
 const getItems  = async()=>{
    
    const response =await authAxiosinstance.get(`/Carts`);
    return response.data;
    }
    
    const query = useQuery({
        queryKey: ['carts','en'],
        queryFn: getItems,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
    
  return query;
}

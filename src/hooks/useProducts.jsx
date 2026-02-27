import React from 'react'
import axiosinstance from '../api/axiosinstance'
import { useQuery } from '@tanstack/react-query';

export default function useProducts() {

    const getProducts=async()=>{
        const response = await axiosinstance.get('/products');
        return response.data;
    }




const query=useQuery(
    {
        queryKey:['products','en'],
        queryFn : getProducts,
        staleTime:1000*60*5,
    } 
);

return query;




}

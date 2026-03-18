import React from 'react'
import axiosinstance from '../api/axiosinstance'
import { useQuery } from '@tanstack/react-query';
import i18n from '../i18next.js';

export default function useProducts() {

    const getProducts=async()=>{
        const response = await axiosinstance.get('/products');
        return response.data;
    }




const query=useQuery(
    {
        queryKey:['products',i18n.language],
        queryFn : getProducts,
        staleTime:1000*60*5,
    } 
);

return query;




}

import React from 'react'
import axiosinstance from '../api/axiosinstance'
import { useQuery } from '@tanstack/react-query';
import i18n from '../i18next.js';

export default function useProduct(id) {

    const getproduct = async () =>{
        const response =await axiosinstance.get(`/products/${id}`);
        return response.data;
    }
    const query = useQuery({
        queryKey :['product',i18n.language,id],
        queryFn: getproduct,
        staleTime:1000*60*5
    });

  return query;
}

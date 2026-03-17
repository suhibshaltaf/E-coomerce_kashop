import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosinstance from '../api/authAxiosinstance';

export default function useChekout() {
    const queryClint=useQueryClient();
  return useMutation ({

    mutationFn:async (PaymentMethod)=>{
        await authAxiosinstance.post('/Checkouts',{PaymentMethod: PaymentMethod})
    },onSuccess:(response)=>{
      console.log(response)  
      if(response.data.url)
        location.href=response.data.url;
      queryClint.invalidateQueries({
        queryKey:['carts']
      })
    }
    
  })
}

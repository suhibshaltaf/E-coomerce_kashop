import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosinstance from '../api/authAxiosinstance'

export default function useUpdateCartItem() {
    const queryClient =useQueryClient();
  return useMutation({
    mutationFn: async({productId,count})=>{
        await authAxiosinstance.patch(`/Carts/${productId}`,{count})
    },
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['carts']})
    }
  }) 

}

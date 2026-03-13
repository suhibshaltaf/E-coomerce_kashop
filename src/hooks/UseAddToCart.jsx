import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosinstance from '../api/authAxiosinstance'

export default function UseAddToCart() {
  const queryClient = useQueryClient();
  const Mutation=useMutation({
    mutationFn:async ({ProductId,Count})=>{
        return await authAxiosinstance.post('/Carts',{
            ProductId:ProductId,
            Count:Count,
        })
    } ,onSuccess:()=>{
queryClient.invalidateQueries({
    queryKey: ['carts']
})
    }
  })
  return Mutation;
}

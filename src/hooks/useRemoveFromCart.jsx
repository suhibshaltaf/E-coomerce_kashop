import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosinstance from '../api/authAxiosinstance';

export default function useRemoveFromCart() {
    const queryClient = useQueryClient();
return  useMutation({
    mutationFn:(cartItemId)=>authAxiosinstance.delete(`/Carts/${cartItemId}`),
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['carts']})
    }
})  
}


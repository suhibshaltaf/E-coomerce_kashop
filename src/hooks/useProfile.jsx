import { useQuery } from '@tanstack/react-query'
import React from 'react'
import authAxiosinstance from '../api/authAxiosinstance'

export default function useProfile() {
  return useQuery({
    queryKey:['profile','en'],
    queryFn: async ()=>{
        const response= await authAxiosinstance.get('/profile');
        return response.data
    },
    staleTime : 1000*60*5
  })

  
}

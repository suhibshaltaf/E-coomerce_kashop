import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../ui/Loader/Loader';
import { Box } from '@mui/material';
import useProduct from '../../hooks/useProduct';

export default function ProductDetails() {

    const {id}=useParams();
    const {data,isError,isLoading,error}=useProduct (id);
     
if(isLoading) return <Loader/>

if(isError) return <Box color={'red'}>{error.message}</Box>
console.log(data);
  return (
    <div>ProductDetails</div>
  )
}

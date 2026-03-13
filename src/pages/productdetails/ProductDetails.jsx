import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../ui/Loader/Loader';
import { Box, Button, Card, CardMedia, Rating, Typography } from '@mui/material';
import useProduct from '../../hooks/useProduct';
import UseAddToCart from '../../hooks/UseAddToCart';

export default function ProductDetails() {

    const {id}=useParams();
    const {data,isError,isLoading,error}=useProduct (id);
   
     
const {mutate,isPending}=UseAddToCart();
if(isLoading) return <Loader/> 

if(isError) return <Box color={'red'}>{error.message}</Box>
const product=data.response;
console.log(data);
  return (
    <Box component={'div'} className='product-details' py={4}>
<Card p={2} sx={{display:'flex',padding:'30px',flexWrap:'wrap',gap:7  }}>
  <CardMedia component={'img'} image={product.image} alt={product.name}
  sx={{width:{xs:"100%",md:300}}}>
  </CardMedia>
  <Box sx={{flex:1} }>
    <Typography variant='h3' component={'h1'} gutterBottom>{product.name} </Typography>
    <Typography variant='body1' component={'span'} gutterBottom>{product.price}$</Typography>
    <Rating readOnly value={product.rate}gutterBottom></Rating>
    <Typography variant='body1'gutterBottom >{product.description}</Typography>
<Typography color="text.secondary"gutterBottom >
    Avaible Quantity: {product.quantity}
     </Typography>
    <Button disabled={isPending}  color='primary' variant='contained' onClick={()=>mutate({
        ProductId:product.id,
        Count:1,
    })}>Add to Cart</Button>
  </Box>
</Card>
   </Box>
  )
}

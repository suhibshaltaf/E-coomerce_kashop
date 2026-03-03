import React from 'react'
import useProducts from '../../hooks/useProducts';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Loader from '../../ui/Loader/Loader';
import { Link } from 'react-router-dom';

export default function Products() {
    const {data,isLoading,isError,error} = useProducts();
    console.log(data);
     
    if(isLoading) return <Loader/>
    
    if(isError) return <Box color={'red'}>{error.message}</Box>
  return (
    
    <Box className='products' py={4}>
        <Typography variant="h4" component={'h2'} mb={2}>
products</Typography>


<Grid container  spacing={3}>
  {data.response.data.map(product=>
  <Grid item  size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
    <Link to={`/products/${product.id}`}> <Card sx={{py:2 ,textAlign:'center' }} key={product.id}>
    <CardMedia component={'img'}
    src={product.image}>

    </CardMedia>
    <CardContent>
      <Typography  component={'h3'}>{product.name}</Typography>
            <Typography  component={'span'} variant='body1' >{product.price}$</Typography>

    </CardContent>
    </Card>
    </Link>
  
 </Grid>
)
  }
</Grid>





   </Box>
    
   
    
  
  )
}
 
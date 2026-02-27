import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import useCategories from '../../hooks/useCategories';
import Loader from '../../ui/Loader/Loader';

export default function Categories() {
 const {data,isLoading,isError,error} = useCategories();
 
if(isLoading) return <Loader/>

if(isError) return <Box color={'red'}>{error.message}</Box>

return (
<Box className='categories' py={3}>
        <Typography variant="h4" component={'h2'} mb={2}>
Categories</Typography>


<Grid container  spacing={3}>
  {data.response.data.map(category=>
  <Grid item  size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
  
  <Card sx={{py:2 ,textAlign:'center' }} key={category.id}>
    <CardContent>
      <Typography  component={'h3'}>{category.name}</Typography>
    </CardContent>
    </Card></Grid>
)
  }
</Grid>





   </Box>
)
}
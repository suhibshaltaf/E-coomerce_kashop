import { Box, CircularProgress } from '@mui/material';
import useCategories from '../../hooks/useCategories';

export default function Categories() {

 const {data,isLoading,isError,error} = useCategories();
 console.log(data);
if(isLoading) return <CircularProgress />

if(isError) return <Box color={'red'}>{error.message}</Box>

return (
<Box>{data.response.map(category=><Box key={category.id}>{category.name}</Box>)}</Box>
)
}
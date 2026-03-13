import { Box, Button, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useCart from '../../hooks/useCart';
import Loader from '../../ui/Loader/Loader';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
export default function Cart() {
  const {data,isLoading,isError,error} = useCart();
  const {mutate,isPending}=useRemoveFromCart();
if(isLoading) return <Loader/>

if(isError) return <Box color={'red'}>{error.message}</Box>
  console.log(data);
  return (
    
<Box className='cart' sx={{py:5}} >

<Typography  component={'h1'} > My Cart</Typography>
<TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>
product Name 
        </TableCell>
<TableCell>
product Price 
        </TableCell><TableCell>
product Quntity
        </TableCell>
        <TableCell>
Total Price
        </TableCell>
        <TableCell>
Actions
        </TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
      {
        data.items.map(item=>(
          <TableRow key={item.productId}>
            <TableCell>
              {item.productName}
            </TableCell><TableCell>
              {item.price}
            </TableCell><TableCell>
              {item.count}
            </TableCell>
            <TableCell>
              {item.count*item.price  }
            </TableCell>
            <TableCell>
              <Button color='error' variant='contained' disabled={isPending} onClick={()=>mutate(item.productId)}>Remove</Button>
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
    <TableFooter>
       <TableCell colSpan={5} sx={{fontWeight:800}}>
             Total :  {data.cartTotal}$
            </TableCell> 
    </TableFooter>
  </Table>
</TableContainer>
</Box>
   
  )
}
  
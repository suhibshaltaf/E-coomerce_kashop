import { Box, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useCart from '../../hooks/useCart';
import Loader from '../../ui/Loader/Loader';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const {data,isLoading,isError,error} = useCart();
  const navigate =useNavigate();

  const {mutate:removeItem,isPending:isPendingRmove}=useRemoveFromCart();
  const {mutate:updateItem,isPending:isPendingUpdate} =useUpdateCartItem();
  const handleUpdateQty =(productId,action)=>{

    const  item =data.items.find((i)=>{
      return i.productId==productId;
    });
    if(action == '-'){
      updateItem({productId,count:item.count-1})
    }
    else{
            updateItem({productId,count:item.count+1})

    }
    console.log(item)



  }
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
 Quntity
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
              <Box sx={{display: 'flex', alignItems:'center'}}>
                <IconButton disabled={isPendingUpdate} onClick={()=>handleUpdateQty(item.productId,'-')}>
                  <RemoveIcon/>
                </IconButton>
             
              <Typography>              {item.count}
</Typography>
 <IconButton disabled={isPendingUpdate} onClick={()=>handleUpdateQty(item.productId,'+')}>
                  <AddIcon/>
                </IconButton> </Box>
            </TableCell>
            <TableCell>
              {item.count*item.price  }
            </TableCell>
            <TableCell>
              <Button color='error' variant='contained' disabled={isPendingRmove} onClick={()=>removeItem(item.productId)}>Remove</Button>
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
   <TableFooter>
  <TableRow>
    <TableCell colSpan={5} sx={{ fontWeight: 800 }}>
      Total : {data.cartTotal}$
    </TableCell>
  </TableRow>
</TableFooter>
  </Table>
</TableContainer>
<Box sx={{display:'flex',gap:3}}>
  <Button variant='contained' color='success' sx={{flex:1}} onClick={()=>navigate('Checkout')} >
    procces to checkout
  </Button>
   <Button variant='contained' sx={{flex:1}} onClick={()=>navigate('/')}>
    countinue shopping
  </Button>
</Box>
</Box>
   
  )
}
  
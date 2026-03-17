import React, { useState } from 'react'
import useCart from '../../hooks/useCart';
import Loader from '../../ui/Loader/Loader';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useChekout from '../../hooks/useChekout';

export default function Checkout() {
      const {data,isLoading,isError,error} = useCart();
      const [paymentmethod,setpaymentmethod]=useState('Cash');
      const {mutate:Checkout,isPending}=useChekout();
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
               
             
              <Typography>              {item.count}
</Typography>
</Box>
            </TableCell>
            <TableCell>
              {item.count*item.price  }
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

<Box sx={{display:'flex',flexDirection:'column',gap:3,alignItems:'center'}}>
<FormControl fullWidth>
  <InputLabel id="paymentmethod">paymentmethod</InputLabel>
  <Select
    labelId="paymentmethod"
    id="demo-simple-select"
    value={paymentmethod}
    label="paymentmethod"
    onChange={(e)=>setpaymentmethod(e.target.value)}
  >
    <MenuItem value={'Cash'}>Cash</MenuItem>
    <MenuItem value={'Visa'}>Visa</MenuItem>
  </Select>
</FormControl>
<Button variant='contained' onClick={()=>Checkout(paymentmethod)}> pay now</Button>
</Box>
</Box>

   
  )
}

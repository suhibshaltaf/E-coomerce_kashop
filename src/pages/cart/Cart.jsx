import React, { useContext } from 'react'
import useCart from '../../hooks/useCart';
import { UserContext } from '../../context/Usercontext';

export default function Cart() {
  const {data,isLoading,isError} = useCart();
  const username=useContext(UserContext);

  console.log(data);
  return (
    <div>Cart - {username}</div>
  )
}

import useCart from '../../hooks/useCart';
export default function Cart() {
  const {data,isLoading,isError} = useCart();

  console.log(data);
  return (
    
    <div>Cart -  </div>

   
  )
}
  
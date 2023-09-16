import React, { useContext } from 'react';
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';


function CartWidget() {
  const {cart, setCart} = useCartContext()
  console.log(cart)

  var totalQuantity = 0
  cart.map((i)=>{
    return totalQuantity = totalQuantity + i.quantity
  })

  return (
    <Link to='/cart' className='header flex justify-between hover:text-green-300 cursor-pointer' 
    >
      <span class="material-icons" >shopping_cart</span>
      {totalQuantity}
    </Link>
  )
}

export default CartWidget
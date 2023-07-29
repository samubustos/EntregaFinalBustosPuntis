import React from 'react'


function CartWidget() {
  return (
    <div className='header flex justify-between hover:text-green-300 cursor-pointer'>
      <span class="material-icons" >shopping_cart</span>
      <i className='numero-cart'>3</i>
    </div>
  )
}

export default CartWidget
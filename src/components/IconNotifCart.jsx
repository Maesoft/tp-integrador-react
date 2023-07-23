import React, { useState } from 'react'
import IconCart from '../assets/cart.jpg'
import Cart from './Cart'
const IconNotifCart = ({products}) => {

  const [cartVisible, setCartVisible]=useState(false);
  const handleClick = () => {
    setCartVisible(!cartVisible)
  }

  return (
    <div className='icon-cart'>
      <img src={IconCart} onClick={handleClick}/><span>{products.length}</span>
      <Cart products={products} visible={cartVisible}/>
    </div>
  )
}

export default IconNotifCart
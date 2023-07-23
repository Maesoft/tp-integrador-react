import React, { useState } from 'react'
import imgCart from '../assets/cart.jpg'
import '../styles/products.css'
import IconNotifCart from './iconNotifCart'


const Products = ({products}) => {
    
    const [cart, setCart]=useState([]);
   
    const addToCart = (product) => {
        setCart([...cart, product])
    }
       
  if(!products.length)return <h2>Aguarde por favor...</h2>  
  return (
      <div>
        <nav>
        <h2>QueDeCosas.com</h2>
        <IconNotifCart products={cart} className="icon-cart"/>    
        </nav>
        {products.map(product =>(
            <div key={product.id} className='card-product'>
                <div>
                     <img className='img-product' src={product.image} alt={product.title}/>
                </div>    
                <div>
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                </div>
                <div>
                    <h3>U$S {product.price}</h3>
                    <img className='btn-cart' src={imgCart} onClick={()=>addToCart(product)} />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products
import React, { useContext, useState } from 'react'
import { cartContext } from '../../contexts/cartContext'
import './CartView.css'
import { useNavigate } from 'react-router-dom'
import ProductItem from '../../components/content/product-view/product-card/ProductCard'

const CartView = () => {
  const navigate =useNavigate();
  const { cart, setCart } = useContext(cartContext);
  const arr = cart.map((data, index) => {
    return (
      <div key={index}>
        <ProductItem product={data}
          type="cart" />
      </div>
    )
  });
  console.log(cart)
  return (
    <div className='cartProducts'>
      {arr}
      <div className='buttonsContainer'>
        <button className='hoemBut' onClick={() => navigate('/')}> Return to Explore Page </button>
        <button className='hoemBut'> Confirm Purchase </button>
      </div>
    </div>
  )
}

export default CartView
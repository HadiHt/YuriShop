import React, { useContext, useState } from 'react'
import { cartContext } from '../../contexts/cartContext'
import './CartView.css'
import { useNavigate } from 'react-router-dom'
import ProductItem from '../../components/content/product-view/product-card/ProductCard'
import CheckOut from '../../components/chekOut/CheckOut'

const CartView = () => {
  const [ hide, setHide ] =useState(false);
  const navigate = useNavigate();
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
    <div className='page'>
      <div className='checkAndButtons'>
        <div className='buttonsContainer'>
          <button className='hoemBut Buttonn' onClick={() => navigate('/')}>{'< '} Return to Explore Page </button>
          <button className='Buttonn' onClick={()=> setHide(!hide)}> Confirm Purchase {'>'}</button>
        </div>
        {hide && <CheckOut />}
      </div>
      <div className='cartProducts'>
        {arr}
      </div>
    </div>
  )
}

export default CartView
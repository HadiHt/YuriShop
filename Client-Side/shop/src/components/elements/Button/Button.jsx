import React,{ useState, useContext } from 'react'
import { cartContext } from '../../../contexts/cartContext'
import Axios from 'axios'
import './Button.css'

const AddToCart = ({id}) => {
  const {cart, setCart}= useContext(cartContext);
  const [ObjectToAdd, setObject]= useState([]);

  const clickToAdd = () => {
    setCart([...cart,
        ObjectToAdd]);
    console.log(cart);
}

  const Save = (e) => {
    console.log(e.target.id);
    Axios.get('http://localhost:5000/api/Products/'+e.target.id)
    .then(res => {
       // console.log(res.data);
        res.data.quantity = document.getElementById('quantity-'+e.target.id).value;
        setObject(res.data);
        setCart([...cart,
          res.data]);
      console.log(cart);
    }).catch(err => console.log(err))
    // console.log(cart)
  }

  return (
    <button onClick={Save} id={id} className='cart'><i className='fa fa-cart'></i>Add to Cart</button>
  )
}

export default AddToCart
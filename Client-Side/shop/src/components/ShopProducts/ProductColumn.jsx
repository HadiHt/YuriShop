import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ProductColumn.css'

const ProductColumn = (product) => {
  const navigate=useNavigate();
  const [ImgData, setImgData] = useState([]);
//  console.log(product);
  useEffect(() => {
    axios.get('http://localhost:5000/api/Images/Product/productid' + product.product.productId)
      .then(res => {
     //   console.log(res.data);
        setImgData(res.data);
      }).catch(err => console.log(err))
  }, []);
  const imge = 'data:image/png;base64,' + ImgData;
  return (
    <div className='OrderColumnContainer'>
      <img className='OrderColumnInfo pimage' src={imge}></img>
      <div className='OrderColumnInfo'>{product.product.name}</div>
      <div className='OrderColumnInfo'>{product.product.soldQuantity}</div>
      <div className='OrderColumnInfo'>{product.product.price}</div>
      <div className='OrderColumnInfo'>{product.product.quantity - product.product.soldQuantity}</div>
      <button id={product.product.productId} onClick={e=>{navigate('EditProduct/'+e.target.id)}} className='OrderColumnInfo'>edit</button>
      <input id={product.product.productId} name='shopProducts' className='OrderColumnInfo' type='checkbox'></input>
    </div>
  )
}

export default ProductColumn
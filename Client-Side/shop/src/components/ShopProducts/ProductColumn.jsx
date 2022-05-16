import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ProductColumn.css'

const ProductColumn = (product) => {
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
      <button className='OrderColumnInfo'>edit</button>
      <input id={product.productId} className='OrderColumnInfo' type='checkbox'></input>
    </div>
  )
}

export default ProductColumn
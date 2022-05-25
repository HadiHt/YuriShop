import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { shopContext } from '../../contexts/shopContext';
import './ProductColumn.css'
import { userContext } from '../../contexts/userContext'

const ProductColumn = (product) => {
  const params = useParams();
  const navigate=useNavigate();
  const {shop} = useContext(shopContext);
  const {user} = useContext(userContext);
  const [ImgData, setImgData] = useState([]);
  const [checkuser, setCheckUser] = useState(false);
//  console.log(product);
  useEffect(() => {
    axios.get('http://localhost:5000/api/Images/Product/productid' + product.product.productId)
      .then(res => {
     //   console.log(res.data);
        setImgData(res.data);
      }).catch(err => console.log(err));
      if(user===""){
        if(shop.shopId.toString()!==params.sid){
          setCheckUser(false);
        }else{
          setCheckUser(true);
        }
      }else if(shop===""){
        setCheckUser(false);
      }
  }, []);
  const imge = 'data:image/png;base64,' + ImgData;
  const edit = e=>{navigate('EditProduct/'+e.target.id)}
  const view =e=>{navigate('/product-details/'+e.target.id)}
  return (
    <div className='OrderColumnContainer'>
      <img className='OrderColumnInfo pimage' src={imge}></img>
      <div className='OrderColumnInfo'>{product.product.name}</div>
      <div className='OrderColumnInfo'>{product.product.soldQuantity}</div>
      <div className='OrderColumnInfo'>{product.product.price}</div>
      <div className='OrderColumnInfo'>{product.product.quantity - product.product.soldQuantity}</div>
      <button id={product.product.productId} onClick={checkuser?edit:view} className='OrderColumnInfo'>{params.sid===shop.shopId.toString()?'edit':'view'}</button>
      {checkuser && <input id={product.product.productId} name='shopProducts' className='OrderColumnInfo' type='checkbox'></input>}
    </div>
  )
}

export default ProductColumn
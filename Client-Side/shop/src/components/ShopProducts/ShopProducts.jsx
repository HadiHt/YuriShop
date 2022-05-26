import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../../contexts/shopContext'
import ProductColumn from './ProductColumn'
import './ShopProducts.css'
import $ from 'jquery'
import { useParams } from 'react-router-dom'
import { userContext } from '../../contexts/userContext'

const ShopProducts = () => {
  const params = useParams();
  const [Data, setData] = useState([]);
  const { shop } = useContext(shopContext);
  const {user} =useContext(userContext);
  const [checkuser, setCheckUser] = useState(false);
  console.log(params.sid)
  useEffect(() => {
    Axios.get('http://localhost:5000/api/Products/' + params.sid + '/shop')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      }).catch(err => console.log(err));
      if(user===""){
        if(shop.shopId!=params.sid){
          setCheckUser(false);
        }else{
          setCheckUser(true);
        }
      }else if(shop===""){
        setCheckUser(false);
      }
  }, [])

  const arr = Data.map((data, index) => {
    return (
      <div key={index}>
        <hr />
        <ProductColumn product={data} />
        <hr />
      </div>
    )
  });
  function massDelete(){
    var toDelete = [];
    $("input:checkbox[name='shopProducts']:checked").each(function(){    
    toDelete.push($(this).attr("id"));            
    });
    console.log(toDelete);
    for (let i = 0; i < toDelete.length; i++) {
        Axios.delete('http://localhost:5000/api/Products/' + toDelete[i] + '/product')
      .then(res => {
        console.log(res.data);
      }).catch(err => console.log(err))
    }
}
  return (
    <div className='ShopProductsContainer'>
      <div className='OrderColumnContainer'>
        <div className='OrderColumnInfo'>picture</div>
        <div className='OrderColumnInfo'>name</div>
        <div className='OrderColumnInfo'>soldQuantity</div>
        <div className='OrderColumnInfo'>price</div>
        <div className='OrderColumnInfo'>available</div>
        <div className='OrderColumnInfo'>{checkuser?'edit':'view'}</div>
        {checkuser&&<div className='OrderColumnInfo'>mass delete</div>}
      </div>
      {arr}
      <div className='OrderColumnContainer'>
      {checkuser&&<button className='OrderColumnInfo' onClick={massDelete}>mass delete</button>}
      </div>
    </div>
  )
}

export default ShopProducts
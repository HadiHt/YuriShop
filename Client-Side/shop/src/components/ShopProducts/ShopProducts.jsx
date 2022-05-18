import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../../contexts/shopContext'
import ProductColumn from './ProductColumn'
import './ShopProducts.css'
import $ from 'jquery'

const ShopProducts = () => {
  const [Data, setData] = useState([]);
  const { shop } = useContext(shopContext);
  useEffect(() => {
    Axios.get('http://localhost:5000/api/Products/' + shop.shopId + '/shop')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      }).catch(err => console.log(err))
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
        // fetch("https://juniorweb-dev.000webhostapp.com/phpapitest/api/Product/delete.php", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
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
        <div className='OrderColumnInfo'>edit</div>
        <div className='OrderColumnInfo'>mass delete</div>
      </div>
      {arr}
      <div className='OrderColumnContainer'>
        <button className='OrderColumnInfo' onClick={massDelete}>mass delete</button>
      </div>
    </div>
  )
}

export default ShopProducts
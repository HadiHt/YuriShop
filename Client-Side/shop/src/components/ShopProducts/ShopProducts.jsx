import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../../contexts/shopContext'
import ProductColumn from './ProductColumn'
import './ShopProducts.css'

const ShopProducts = () => {
  const [Data, setData] = useState([]);
  const {shop} = useContext(shopContext);
  useEffect(() => {
    Axios.get('http://localhost:5000/api/Products/'+shop.shopId+'/shop')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      }).catch(err => console.log(err))
  }, [])
  
  const arr = Data.map((data, index) => {
    return (
      <div key={index}>
        <hr/>
        <ProductColumn product={data}/>
        <hr/>
      </div>
    )
  });
  return (
    <div className='ShopProductsContainer'>
      {arr}
    </div>
  )
}

export default ShopProducts
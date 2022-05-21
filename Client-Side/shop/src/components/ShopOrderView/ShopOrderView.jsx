import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../../contexts/shopContext';
import ShopOrderColumn from './ShopOrderColumn';
import './ShopOrderView.css'

const ShopOrderView = () => {
  const [Data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const { shop } = useContext(shopContext)
  useEffect(() => {
    var Dta = [];
    console.log('hi')
    axios.get('http://localhost:5000/api/Orders/purchases')
      .then(res => {
        setPurchases(res.data);
        axios.get('http://localhost:5000/api/Products/' + shop.shopId + '/shop')
          .then(res => {
            console.log('hey')
            setProducts(res.data);
            // console.log
          }).catch(err => console.log(err))
      }
      ).catch(err => console.log(err))
  }, [])
  var Dta = [];
  const arr = products.map((product, i) => {
    return purchases.map((purchase, index) => {
      if (product.productId === purchase.productRefId) {
        return (
          <div key={index}>
            {console.log(i)}
            <ShopOrderColumn product={product} purchase={purchase} />
            <hr />
          </div>
        )
      }
    });
  });
  return (
    <div className='ShopOrderContainer'>
      <div className='OrderColumnContainer'>
        <div className='OrderColumnInfo'>picture</div>
        <div className='OrderColumnInfo'>name</div>
        <div className='OrderColumnInfo'>quantity</div>
        <div className='OrderColumnInfo'>click here to see more info</div>
      </div>
      <hr/>
      {arr}
    </div>
  )
}

export default ShopOrderView
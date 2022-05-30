import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { orderListContext } from '../../contexts/orderListContext';
import { userContext } from '../../contexts/userContext';
import OrderViewHeader from './OrderViewHeader/OrderViewHeader';
import OrderViewList from './OrderViewList/OrderViewList';
import './OrderViewTemplate.css'

const OrderTemplate = () => {

  const {user} = useContext(userContext);
  const {setOrders}=useContext(orderListContext);
  useEffect(()=>{setOrders(user);},[])
  //s
   
  return (
    <div className='OrderViewTemplate'>
        <OrderViewHeader/>
        <OrderViewList />
    </div>
  )
}

export default OrderTemplate
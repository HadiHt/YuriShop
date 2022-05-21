import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrderViewHeader from './OrderViewHeader/OrderViewHeader';
import OrderViewList from './OrderViewList/OrderViewList';
import './OrderViewTemplate.css'

const OrderTemplate = () => {
   
  return (
    <div className='OrderViewTemplate'>
        <OrderViewHeader/>
        <OrderViewList />
    </div>
  )
}

export default OrderTemplate
import React, { useEffect, useState, useContext } from 'react'
import './OrderViewTemplate.css'
import Axios from 'axios'
import { orderListContext } from '../../contexts/orderListContext'
import OrderViewHeader from './OrderViewHeader/OrderViewHeader'
import OrderViewList from './OrderViewList/OrderViewList'

const OrderViewTemplate = () => {
    
    return (
        <div className='OrderViewTemplate'>
            <OrderViewHeader />
            <OrderViewList />
        </div>
    )
}

export default OrderViewTemplate
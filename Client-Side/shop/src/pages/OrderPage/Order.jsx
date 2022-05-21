import React, { useContext, useState, useEffect } from 'react'
import OrderCard from '../../components/oderCard/OrderCard'
import Axios from 'axios'
import './Order.css'
import { userContext } from '../../contexts/userContext'
import { orderListContext } from '../../contexts/orderListContext'
import OrderTemplate from '../../components/OrderViewTemplate/OrderTemplate'

const Order = () => {
    const { orderList } = useContext(orderListContext)
    const arr = orderList.map((data, index) => {
        return (
            <div key={index}>
                <OrderCard index={index} order={data}/>
            </div>
        )
    });
    return (
        <div className='OrderPageContainer'>
            <div className="OrdersContainer">
                {arr}
            </div>
            <div className="OrderPreview">
                <div className='orderPreviewContent'>
                    {/* <OrderViewTemplate/> */}
                    <OrderTemplate/>
                </div>
            </div>
        </div>
    )
    
}

export default Order
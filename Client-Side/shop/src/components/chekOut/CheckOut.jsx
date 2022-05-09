import React, { useState, useEffect, useContext } from 'react'
import { cartContext } from '../../contexts/cartContext'
import Axios from 'axios'
import './CheckOut.css'
import OrderSummary from './subComponents/OrderSummary'
import { cardContext } from '../../contexts/cardContext'

const CheckOut = () => {
    const { card } = useContext(cardContext);
    return (
        <div className='Chekout'>
            <img src={process.env.PUBLIC_URL + '/YS_Logo.png'}></img>
            <h3>Summary</h3>
            <OrderSummary Data={card} AddOrder={AddOrder}/>
        </div>
    )
}

export const AddOrder = (user,data, date) => {
        var object = JSON.stringify({
            "state": "pending",
            "quantity": data.quantity,
            "userRefId": user.userId,
            "productRefId": data.productId,
            "dateOfPurchase": date
        });
        var config = {
            method: 'post', url: 'http://localhost:5000/api/Orders/order', headers: {
                'Content-Type': 'application/json'
            }, data: object
        };
        Axios(config).then(function (response) { }).catch(function (error) { console.log(error); });
    }

export default CheckOut
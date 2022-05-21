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
            <OrderSummary Data={card} AddOrder={AddOrderPurchase}/>
        </div>
    )
}

export const AddOrderPurchase = (orderId,data) => {
        var object = JSON.stringify({
            "productState": "pending",
            "quantity": data.quantity,
            "productRefId": data.productId,
<<<<<<< HEAD
<<<<<<< HEAD
            "orderRefId": orderId
=======
            "dateOfPurchase": date
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
=======
            "dateOfPurchase": date
>>>>>>> origin
        });
        var config = {
            method: 'post', url: 'http://localhost:5000/api/Orders/purchase', headers: {
                'Content-Type': 'application/json'
            }, data: object
        };
        Axios(config).then(function (response) { }).catch(function (error) { console.log(error); });
    }

export default CheckOut
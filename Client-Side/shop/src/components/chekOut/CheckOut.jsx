import React, { useState, useEffect, useContext } from 'react'
import { cartContext } from '../../contexts/cartContext'
import Axios from 'axios'
import './CheckOut.css'
import { userContext } from '../../contexts/userContext'

const CheckOut = () => {
    const { user } = useContext(userContext);
    const AddOrder = (data, date) => {
        var object = JSON.stringify({
            "state": "pending",
            "quantity": data.quantity,
            "userRefId": user.userId,
            "productRefId": data.productId,
            "dateOfPurchase": date
        });
        var config = {
            method: 'post',
            url: 'http://localhost:5000/api/Orders/order',
            headers: {
                'Content-Type': 'application/json'
            },
            data: object
        };
        Axios(config)
            .then(function (response) {console.log(JSON.stringify(response.data));})
            .catch(function (error) {console.log(error);});
    }
    const { cart, setcart } = useContext(cartContext);
    var TotalPrice = 0;
    const items = cart.map((data, index) => {
        TotalPrice = TotalPrice + (data.price * data.quantity);
        console.log(TotalPrice);
        return (
            <div key={index} className='itemRow'>
                <p className='item'>{data.name}</p>
                <p className='item'>{data.quantity}</p>
                <p className='item'>{data.price * data.quantity}</p>
            </div>
        )
    });
    var array = [];
    const confirmPurchase = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        cart.map((data) => {
            AddOrder(data, today);
        });
    }
    const CashMethods = () => {
        return (
            <div className='itemRow'>
                <img src={process.env.PUBLIC_URL + '/masteer-card.png'} alt=""></img>
                <img src={process.env.PUBLIC_URL + '/visa.png'} alt=""></img>
            </div>
        )
    }

    return (
        <div className='Chekout'>
            <img src={process.env.PUBLIC_URL + '/YS_Logo.png'}></img>
            <h3>Summary</h3>
            <div className='ToTalSum'>
                <hr />
                <div className='itemRow'>
                    <h4 className='item'>name</h4>
                    <h4 className='item'>quantity</h4>
                    <h4 className='item'>price in K L.L</h4>
                </div>
                <hr />
                {items}
                <hr />
                <div className='itemRow'>
                    <h4 className='item'>total price</h4>
                    <h4 className='item'>{TotalPrice}</h4>
                </div>
                <hr />
                <CashMethods />
                <div className='itemrow'>
                    <button onClick={confirmPurchase} className='Buttonn item'>confirm</button>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
import React, { useState, useEffect, useContext } from 'react'
import { cartContext } from '../../contexts/cartContext'
import Axios from 'axios'
import './CheckOut.css'
import { userContext } from '../../contexts/userContext'
import OrderSummary from './subComponents/OrderSummary'
import ActionButton from './ActionButton'

const CheckOut = () => {
    const [Data, setData] = useState([]);
    const { user } = useContext(userContext);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/Users/' + user.userId + '/card')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            }).catch((err) => {
                setData('');
               // console.log(err)
            })
    }, []);
    return (
        <div className='Chekout'>
            <img src={process.env.PUBLIC_URL + '/YS_Logo.png'}></img>
            <h3>Summary</h3>
            <OrderSummary Data={Data} AddOrder={AddOrder}/>
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
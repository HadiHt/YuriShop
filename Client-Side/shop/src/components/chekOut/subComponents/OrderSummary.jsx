import React, { useContext,useState } from 'react'
import ActionButton from '../ActionButton'
import CashMethods from './CashMethods'
import { cartContext } from '../../../contexts/cartContext';
import { userContext } from '../../../contexts/userContext';
import Axios from 'axios';
import { orderListContext } from '../../../contexts/orderListContext';

const OrderSummary = ({Data,AddOrder}) => {
    const { user } = useContext(userContext);
    const { cart,setCart } = useContext(cartContext);
    const [errorMessage, setErrorMessage] = useState(false);
    const {setOrders} = useContext(orderListContext)
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
    const confirmPurchase = () => {
        if (Data !== '') {
            Axios.post('http://localhost:5000/api/Orders/order', {
                "orderState": "pending",
                "userRefId": user.userId
            }).then(function (response) {
                console.log(response.data);
                cart.map((data) => {
                    AddOrder(response.data.orderId,data);
                });
                setCart([]);
                setOrders(user);
            })
        } else {
            setErrorMessage(true)
        }
    }
    return (
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
            <ActionButton id={user.userId} Data={Data} />
            <p>By pressing confirm you agree the Yuri Shop Conditions of Use, Sale And sharing your financial informations</p>
            <div className='itemrow'>
                <button onClick={confirmPurchase} className='Buttonn item'>confirm</button>
            </div>
            {errorMessage && <p className='error_message'> please Add a payment method before proceeding with the order</p>}
        </div>
    )
}
export default OrderSummary
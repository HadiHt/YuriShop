import React,{useState,useContext, useEffect} from 'react'
import { orderListContext } from '../../contexts/orderListContext'
import { userContext } from '../../contexts/userContext';
import Axios from 'axios';
import './OrderCard.css'

const OrderCard = (order) => {
    const { setCOrderList } =useContext(orderListContext);
    const { user } = useContext(userContext);
    const [ orderL,serOrderL] = useState([]);
    const [ onWayProducts,setOnWayProducts] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/api/Orders/'+user.userId+'/user')
            .then(res => {
              //  console.log(res.data);
                const arr = res.data.filter((data) => {
                    return data.timeCreated === order.order.timeCreated
                })
                const onWay = arr.filter((data) => {
                    return data.state === 'on way'
                })
                setOnWayProducts(onWay)
                serOrderL(arr)
            }).catch((err) => {
                serOrderL('');
        })
    }, [])
   // setCOrderList(order.order.timeCreated);
    return (
        <div className="order_card">
            <img src={process.env.PUBLIC_URL + '/Order_Common_Photo.jpeg'} alt="" />
            <div className="order_box">
                <div className='order_header'>
                    <h2 > orders made in : {order.order.timeCreated.substring(0,10)}</h2>
                </div>
                <p>Number of products : {orderL.length} </p>
                <p>on way products: {onWayProducts.length}/{orderL.length} </p>
            </div>
            <div className="overlay">
                <div className='iconnnn'>
                    <i id={order.order.timeCreated}
                    onClick={e=>setCOrderList(e.target.id,user.userId)}
                    className="fa fa-shopping-bag"></i>
                </div>
            </div>
        </div>

    )
}

export default OrderCard
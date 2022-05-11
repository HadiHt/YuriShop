import React, { useState, useEffect, useContext } from 'react'
import { productListContext } from '../../../contexts/productListContext';
import Axios from 'axios';
import './OrderViewList.css'
import { orderListContext } from '../../../contexts/orderListContext';
import { userContext } from '../../../contexts/userContext';

const OrderViewList = () => {
    const { orderList } = useContext(orderListContext);
    console.log(orderList)
    const { user } = useContext(userContext);
    const [Data,setData] = useState();
    useEffect(() => {
        Axios.get('http://localhost:5000/api/Products')
            .then(res => {
           //     console.log(res.data);
                setData(res.data);
            }).catch(err => console.log(err))
    }, [])
    console.log(Data);
    const arr = orderList.map((data, index) => {
        console.log(data)
        var arr1=[];
        arr1 = Data.filter((data1) => {
            return (data1.productId === data.productRefId)
        })
        console.log(arr1);
        return (
            <div key={index} className='RowOfContents'>
                <div>{arr1[0].name}</div>
                <div>{data.state}</div>
            </div>
        )
    });
    // const arr = order.map((data, index) => {
    //     Axios.get('http://localhost:5000/api/Products/' + data.productRefId)
    //         .then(res => {
    //             console.log(res.data);
    //             setProduct(res.data)
    //         }).catch((err) => {
    //             //    serOrderL('');
    //         })
    //     return (
    //         <div key={index} className='RowOfContents'>
    //             hi
    //             <div>{product.name}</div>
    //             <div>{data.state}</div>
    //         </div>
    //     )
    // });
    // console.log(orderList);
    // const [product,setProduct]=useState([{name:'none'}]);
    // if(order.id){
    // const arr = order.map((data, index) => {
    //     Axios.get('http://localhost:5000/api/Products/' + data.productRefId)
    //         .then(res => {
    //             console.log(res.data);
    //             setProduct(res.data)
    //         }).catch((err) => {
    //             //    serOrderL('');
    //         })
    //     return (
    //         <div key={index} className='RowOfContents'>
    //             hi
    //             <div>{product.name}</div>
    //             <div>{data.state}</div>
    //         </div>
    //     )
    // });}
    return (
        <div className='TableOfContents'>
            <div className='RowOfContents'>
                <h4>product</h4>
                <h4>state</h4>
            </div>
            <hr />
            {arr}
        </div>
    )
}

export default OrderViewList
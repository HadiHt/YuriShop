import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import './OrderViewList.css'
import { orderListContext } from '../../../contexts/orderListContext';
import { userContext } from '../../../contexts/userContext';
import { allProductContext } from '../../../contexts/allProductsContext';

const OrderViewList = () => {
    const {allProducts} =useContext(allProductContext);
    
    console.log(allProducts);
    const { orderList,index } = useContext(orderListContext);
    var Data;
    Data = orderList[index].purchases
    console.log(Data)
    const arr = Data.map((data, index) => {
        console.log(Data)
        var arr1=[];
        arr1 = allProducts.filter((data1) => {
            return (data1.productId === data.productRefId)
        })
        console.log(arr1);
        return (
            <div key={index} className='RowOfContents'>
                <div>{arr1[0].name}</div>
                <div>{data.productState}</div>
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
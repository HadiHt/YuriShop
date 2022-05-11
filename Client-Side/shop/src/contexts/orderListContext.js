import React, { useContext } from "react";
import { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const orderListContext = createContext('');

export const OrderProvider = (props) => {
    const [orderList, setOrderList] = useState([]);

    function setCOrderList(orderDate,id){
        Axios.get('http://localhost:5000/api/Orders/'+id+'/user')
            .then(res => {
              //  console.log(res.data);
                const arr = res.data.filter((data) => {
                    return data.timeCreated === orderDate
                })
                setOrderList(arr);
                console.log(arr)
            }).catch((err) => {
                setOrderList([]);
        })
    }
    function setCOrderListDefault(id){
        Axios.get('http://localhost:5000/api/Orders/'+id+'/user')
            .then(res => {
              //  console.log(res.data);
                setOrderList(res.data[0]);
                console.log(res.data[0])
            }).catch((err) => {
                setOrderList([]);
        })
    }
    return (
        <orderListContext.Provider value={{ orderList, setOrderList, setCOrderList, setCOrderListDefault }}>
            {props.children}
        </orderListContext.Provider>
    );
}
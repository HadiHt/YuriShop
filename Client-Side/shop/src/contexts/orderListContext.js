import React, { useContext } from "react";
import { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const orderListContext = createContext('');

export const OrderProvider = (props) => {
    const [orderList, setOrderList] = useState([]);
    const [index, setIndex] = useState(0);

    function setOrders(user) {
        console.log('hi')
        Axios.get('http://localhost:5000/api/Orders/' + user.userId + '/user')
            .then(res => {
                setOrderList(res.data)
                // console.log(Data)
            }).catch(err => console.log(err))
    }

    return (
        <orderListContext.Provider value={{ orderList, setOrderList, setOrders, index, setIndex }}>
            {props.children}
        </orderListContext.Provider>
    );
}
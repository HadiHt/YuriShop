import React from "react";
import { useState, createContext } from "react";
import Axios from "axios";

export const addressContext = createContext('');

export const AddressProvider = (props) => {
    const [address,setaddress] =useState('');
    function setAddress(userId){
        Axios.get('http://localhost:5000/api/Users/' + userId + '/address')
            .then(res => {
                setaddress(res.data);
            }).catch((err) => {
                setaddress('');
        })
    }
    return(
        <addressContext.Provider value={{address,setaddress,setAddress}}>
            {props.children}
        </addressContext.Provider>
    );
}
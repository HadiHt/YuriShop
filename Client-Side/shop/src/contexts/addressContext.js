import React from "react";
import { useState, createContext } from "react";
import Axios from "axios";

export const addressContext = createContext('');

export const AddressProvider = (props) => {
    const [address, setaddress] = useState('');
    function setAddress(userObject) {
        if (userObject.hasOwnProperty('isAdmin')) {
            Axios.get('http://localhost:5000/api/Users/' + userObject.userId + '/address')
                .then(res => {
                    setaddress(res.data);
                }).catch((err) => {
                    setaddress([{
                        street:null,
                        building:null,
                        area:null,
                        city:null,
                        state:null,
                        details:null
                    }]);
                })
        }else{
            Axios.get('http://localhost:5000/api/Shops/' + userObject.shopId + '/address')
                .then(res => {
                    console.log(res.data);
                    setaddress(res.data);
                }).catch((err) => {
                    setaddress([{
                        street:null,
                        building:null,
                        area:null,
                        city:null,
                        state:null,
                        Details:null
                    }]);
                })
        }
    }
    return (
        <addressContext.Provider value={{ address, setaddress, setAddress }}>
            {props.children}
        </addressContext.Provider>
    );
}
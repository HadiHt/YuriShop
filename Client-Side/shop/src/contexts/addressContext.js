import React from "react";
import { useState, createContext } from "react";
import Axios from "axios";

export const addressContext = createContext('');

export const AddressProvider = (props) => {
<<<<<<< HEAD
    const [address, setaddress] = useState('');
    function setAddress(userObject) {
        if (userObject.hasOwnProperty('isAdmin')) {
            Axios.get('http://localhost:5000/api/Users/' + userObject.userId + '/address')
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
=======
    const [address,setaddress] =useState('');
    function setAddress(userId){
        Axios.get('http://localhost:5000/api/Users/' + userId + '/address')
            .then(res => {
                setaddress(res.data);
            }).catch((err) => {
                setaddress('');
        })
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
    }
    return (
        <addressContext.Provider value={{ address, setaddress, setAddress }}>
            {props.children}
        </addressContext.Provider>
    );
}
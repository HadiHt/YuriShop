import React, { useContext } from "react";
import { useState, createContext, useEffect } from "react";
import Axios from "axios";
import { userContext } from "./userContext";

export const cardContext = createContext('');

export const CardProvider = (props) => {
    const { user } = useContext(userContext);
    const [card, setcard] = useState('');
    function setCard(userObject) {
        if (userObject.hasOwnProperty('isAdmin')) {
            Axios.get('http://localhost:5000/api/Users/' + userObject.userId + '/card')
                .then(res => {
                    console.log(res.data);
                    setcard(res.data);
                }).catch((err) => {
                    setcard('');
                })
        } else {
            Axios.get('http://localhost:5000/api/Shops/' + userObject.shopId + '/card')
                .then(res => {
                    console.log('hi')
                    console.log(res.data);
                    setcard(res.data);
                }).catch((err) => {
                    setcard('');
                })
        }
    }
        return (
            <cardContext.Provider value={{ card, setcard, setCard }}>
                {props.children}
            </cardContext.Provider>
        );
    }
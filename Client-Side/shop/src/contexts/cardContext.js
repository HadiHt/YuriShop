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
                    setcard(res.data);
                }).catch((err) => {
                    setcard('');
                })
        } else {
            Axios.get('http://localhost:5000/api/Shops/' + userObject.shopId + '/card')
                .then(res => {
<<<<<<< HEAD
=======
                    console.log(res.data);
>>>>>>> b42b33b42f3ff7b6f998dcc6ca2eb86aac7e2f84
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
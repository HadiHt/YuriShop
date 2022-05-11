import React, { useContext } from "react";
import { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const productListContext = createContext('');

export const ProductListProvider = (props) => {
    const [product, setproduct] = useState('');
    function AddProduct(userId) {
        Axios.get('http://localhost:5000/api/Products/' + userId + '/product')
            .then(res => {
                setproduct([...product, res.data]);
                console.log(product);
            }).catch((err) => {
                setproduct('');
            }
        )
    }
    return (
        <productListContext.Provider value={{ product, AddProduct }}>
            {props.children}
        </productListContext.Provider>
    );
}
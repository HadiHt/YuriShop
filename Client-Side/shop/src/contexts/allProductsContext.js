import React, { useContext } from "react";
import { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const allProductContext = createContext('');

export const AllProductsProvider = (props) => {
    const [allProducts, setAllProducts] = useState([]);

    function setProductss() {
        Axios.get('http://localhost:5000/api/Products')
            .then(res => {
                setAllProducts(res.data)
                // console.log(Data)
            }).catch(err => console.log(err))
    }

    return (
        <allProductContext.Provider value={{ allProducts, setAllProducts, setProductss }}>
            {props.children}
        </allProductContext.Provider>
    );
}
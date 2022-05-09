import React from "react";
import { useState, createContext } from "react";

export const cartContext = createContext('');

export const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    return (
        <cartContext.Provider value={{ cart, setCart }}>
            {props.children}
        </cartContext.Provider>
    );
}
//-----------------------------------------------------------------------
        //function to be used when adding to cart after initializing 
        //the useContext and setCart from Cart context :
//-----------------------------------------------------------------------
// const clickToAdd = () => {
//     setCart([...cart,
//     {
//         ...
//     }]);
//     console.log(cart);
// }
//----------------------------------------------------------------------

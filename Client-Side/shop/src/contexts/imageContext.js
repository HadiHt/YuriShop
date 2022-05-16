import React, { useContext } from "react";
import { useState, createContext, useEffect } from "react";

export const imageContext = createContext('');

export const ImageProvider = (props) => {
    const [image, setImage] = useState('');
    return (
        <imageContext.Provider value={{ image, setImage }}>
            {props.children}
        </imageContext.Provider>
    );
}
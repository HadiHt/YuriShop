import React from "react";
import { useState, createContext } from "react";

export const userContext = createContext(null);

export const UserProvider = (props) => {

    const [user,setUser] =useState();

    return(
        <userContext.Provider value={{user,setUser}}>
            {props.children}
        </userContext.Provider>
    );
}


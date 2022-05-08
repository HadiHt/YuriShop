import React from "react";
import { UserProvider } from "./userContext";
import { CartProvider } from "./cartContext";
import { CardProvider } from "./cardContext";
import { AddressProvider } from "./addressContext";

export const ContextWrapper = (props) => {
    
    return (
        <UserProvider>
            <CartProvider>
                <AddressProvider>
                    <CardProvider>
                        {props.children}
                    </CardProvider>
                </AddressProvider>
            </CartProvider>
        </UserProvider>
    );
}
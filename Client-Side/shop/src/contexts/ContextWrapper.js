import React from "react";
import { UserProvider } from "./userContext";
import { CartProvider } from "./cartContext";
import { CardProvider } from "./cardContext";
import { AddressProvider } from "./addressContext";
import { OrderProvider } from "./orderListContext";

const ContextWrapper = (props) => {

    return (
        <UserProvider>
            <CartProvider>
                <AddressProvider>
                    <CardProvider>
                        <OrderProvider>
                            {props.children}
                        </OrderProvider>
                    </CardProvider>
                </AddressProvider>
            </CartProvider>
        </UserProvider>
    );
}
export default ContextWrapper;
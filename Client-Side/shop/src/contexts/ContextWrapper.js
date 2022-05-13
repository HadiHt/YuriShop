import React from "react";
import { UserProvider } from "./userContext";
import { CartProvider } from "./cartContext";
import { CardProvider } from "./cardContext";
import { AddressProvider } from "./addressContext";
import { OrderProvider } from "./orderListContext";
import { ShopProvider } from "./shopContext";

const ContextWrapper = (props) => {

    return (
        <UserProvider>
            <ShopProvider>
                <CartProvider>
                    <AddressProvider>
                        <CardProvider>
                            <OrderProvider>
                                {props.children}
                            </OrderProvider>
                        </CardProvider>
                    </AddressProvider>
                </CartProvider>
            </ShopProvider>
        </UserProvider>
    );
}
export default ContextWrapper;
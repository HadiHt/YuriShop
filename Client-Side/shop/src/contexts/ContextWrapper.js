import React from "react";
import { UserProvider } from "./userContext";
import { CartProvider } from "./cartContext";
import { CardProvider } from "./cardContext";
import { AddressProvider } from "./addressContext";
import { OrderProvider } from "./orderListContext";
import { ShopProvider } from "./shopContext";
import { ImageProvider } from "./imageContext";
import { AllProductsProvider } from "./allProductsContext";


const ContextWrapper = (props) => {
    
    return (
        <UserProvider>
            <ShopProvider>
                <CartProvider>
                    <AddressProvider>
                        <CardProvider>
                            <OrderProvider>
                                <ImageProvider>
                                    <AllProductsProvider>
                                    {props.children}
                                    </AllProductsProvider>
                                </ImageProvider>
                            </OrderProvider>
                        </CardProvider>
                    </AddressProvider>
                </CartProvider>
            </ShopProvider>
        </UserProvider>
    );
}
export default ContextWrapper;
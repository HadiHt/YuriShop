import React from "react";
import { UserProvider } from "./userContext";
import { CartProvider } from "./cartContext";
import { CardProvider } from "./cardContext";
import { AddressProvider } from "./addressContext";
<<<<<<< HEAD
import { OrderProvider } from "./orderListContext";
import { ShopProvider } from "./shopContext";
import { ImageProvider } from "./imageContext";
import { AllProductsProvider } from "./allProductsContext";
=======
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451

const ContextWrapper = (props) => {
    
    return (
        <UserProvider>
<<<<<<< HEAD
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
=======
            <CartProvider>
                <AddressProvider>
                    <CardProvider>
                        {props.children}
                    </CardProvider>
                </AddressProvider>
            </CartProvider>
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
        </UserProvider>
    );
}
export default ContextWrapper;
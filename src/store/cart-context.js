import React from "react";

const CartContext = React.createContext({
    // items: [],
    items : [],
    // addItemToCart: ()=>{},
    // removeItemFromCart: ()=>{},
    addItemToServer: () => { },
    getItemFromServer : ()=>{},
    removeItemToServer: () => { }
})

export default CartContext;
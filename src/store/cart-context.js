import React from "react";

const CartContext=React.createContext({
    items:[],
    addItemToCart : ()=>{},
    removeItemFromCart : ()=>{}
})

export default CartContext;
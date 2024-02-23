import { useState } from "react"
import CartContext from "./cart-context"

const CartProvider = (props) => {

    const [enteredItem, setEnteredItem] = useState([]);

    const addItemToCartHandler = (item) => {
        const existingItemIndex = enteredItem.findIndex((ele) => ele.id === item.id)
        if (existingItemIndex !== -1) {
            const updateItem = [...enteredItem];
            updateItem[existingItemIndex].quantity += 1
            setEnteredItem(updateItem)
        } else {
            setEnteredItem(prevItems => [...prevItems, item])
        }
    }

    const removeItemFromCartHandler = (item)=>{
        const existingItemIndex = enteredItem.findIndex( (ele) => ele.id === item.id )

        if(existingItemIndex !== -1 ){
            const updatedItem = [...enteredItem];
            updatedItem[existingItemIndex].quantity -= 1;
            if(updatedItem[existingItemIndex].quantity <=0){
                updatedItem.splice(existingItemIndex,1)
            }
            setEnteredItem(updatedItem)
    }
}

    const cartContext = {
        items: enteredItem,
        addItemToCart: addItemToCartHandler,
        removeItemFromCart: removeItemFromCartHandler
    }
    return (
        <>
            {console.log(cartContext.items)}
            <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
        </>
    )
}

export default CartProvider;
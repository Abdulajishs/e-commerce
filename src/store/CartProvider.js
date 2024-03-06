import { useCallback, useEffect, useState } from "react"
import CartContext from "./cart-context"

const CartProvider = (props) => {

    // const [enteredItem, setEnteredItem] = useState([]);

    const [serverItem, setSeverItem] = useState([])

    // const addItemToCartHandler = (item) => {
    //     const existingItemIndex = enteredItem.findIndex((ele) => ele.id === item.id)
    //     if (existingItemIndex !== -1) {
    //         const updateItem = [...enteredItem];
    //         updateItem[existingItemIndex].quantity += 1
    //         setEnteredItem(updateItem)
    //     } else {
    //         setEnteredItem(prevItems => [...prevItems, item])
    //     }
    // }

    const addItemToServerHandler = async (item) => {
        const existingItemIndex = serverItem.findIndex((ele) =>  ele.id === item.id)
        if (existingItemIndex !== -1) {
            const updateItem = [...serverItem];
            updateItem[existingItemIndex].quantity += 1;
            console.log(updateItem[existingItemIndex]._id);
            console.log(updateItem[existingItemIndex]);
            const body = {...updateItem[existingItemIndex]}
            delete body._id
            // console.log(body);

            // console.log(`https://crudcrud.com/api/1d996880b9134e33bfcd2c2c93bb200d/cardtesttestcom/${updateItem[existingItemIndex]._id}`);
            try {
                const response = await fetch(`https://crudcrud.com/api/fb843a5a2fca446b8bb568bd276d2369/cardtesttestcom/${updateItem[existingItemIndex]._id}`, {
                    method: "PUT",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                console.log(response);
                if (response.ok) {
                    setSeverItem(updateItem)
                    // console.log(data);
                } else {
                    let errorMessage = "Storing data failed"
                    throw new Error(errorMessage)
                }
            } catch (error) {
                alert(error.message)
            }
        } else {
            try {
                const response = await fetch("https://crudcrud.com/api/fb843a5a2fca446b8bb568bd276d2369/cardtesttestcom", {
                    method: "POST",
                    body: JSON.stringify(item),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await response.json()
                if (response.ok) {
                    setSeverItem(previtem => [...previtem, data])
                    console.log(data,"data");
                } else {
                    let errorMessage = "Storing data failed"
                    throw new Error(errorMessage)
                }
            } catch (error) {
                alert(error.message)
            }
        }
    }

    // const removeItemFromCartHandler = (item) => {
    //     const existingItemIndex = enteredItem.findIndex((ele) => ele.id === item.id)

    //     if (existingItemIndex !== -1) {
    //         const updatedItem = [...enteredItem];
    //         updatedItem[existingItemIndex].quantity -= 1;
    //         if (updatedItem[existingItemIndex].quantity <= 0) {
    //             updatedItem.splice(existingItemIndex, 1)
    //         }
    //         setEnteredItem(updatedItem)
    //     }
    // }

    const getItemFromServerHandler = useCallback(async () => {
        try {
            const response = await fetch("https://crudcrud.com/api/fb843a5a2fca446b8bb568bd276d2369/cardtesttestcom")
            const data = await response.json()
            if (response.ok) {
                console.log(data, "retrived");
                return data
            } else {
                let errorMessage = "Storing data failed"
                throw new Error(errorMessage)
            }
        } catch (error) {
            alert(error.message)
        }
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getItemFromServerHandler();
            setSeverItem(data);
        }
        fetchData()
    }, [getItemFromServerHandler])


    const removeItemFromServerHandler = async (id) => { 
        // console.log(id);
        try {
            const response = await fetch(`https://crudcrud.com/api/fb843a5a2fca446b8bb568bd276d2369/cardtesttestcom/${id}`, {
                method: "DELETE",
            })
            console.log(response);

            if (response.ok) {
                setSeverItem(prevItems => prevItems.filter((ele) => ele._id !==  id))
            } else {
                let errorMessage = "Storing data failed"
                throw new Error(errorMessage)
            }
        } catch (error) {
            alert(error.message)
        }
    }


    const cartContext = {
        // items: enteredItem,
        items: serverItem,
        // addItemToCart: addItemToCartHandler,
        // removeItemFromCart: removeItemFromCartHandler,
        addItemToServer: addItemToServerHandler,
        getItemFromServer: getItemFromServerHandler,
        removeItemToServer: removeItemFromServerHandler
    }
    return (
        <>
            {console.log(cartContext.items) }
            <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
        </>
    )
}

export default CartProvider;
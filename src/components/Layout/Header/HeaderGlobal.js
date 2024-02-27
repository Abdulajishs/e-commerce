import { useState } from "react";
import Cart from "../../Cart/Cart";
import Header from "./Header";
// import CartProvider from "../../../store/CartProvider";

const HeaderGlobal = (props) => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true)
    }
    const hideCardHandler = () => {
        setShowCart(false)
    }
    return (
        <>
            {showCart && <Cart onClose={hideCardHandler} />}
            <Header onShowCart={showCartHandler} />
        </>
    )
}

export default HeaderGlobal;
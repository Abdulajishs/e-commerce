import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
    const { ele } = props;
    console.log(ele);
    const cntx = useContext(CartContext);

    const  removeItemHandler =(event)=>{
        event.preventDefault();
        cntx.removeItemFromCart(ele)
    }

    return (
        <tr>
            <td>
                {<img src={ele.imageUrl} alt={ele.title} />}
                {ele.title}
            </td>
            <td>{ele.price}</td>
            <td>
                {ele.quantity}
                <Button variant="danger" size="sm" onClick={removeItemHandler}>REMOVE</Button>
            </td>
        </tr>
    )
}

export default CartItem;
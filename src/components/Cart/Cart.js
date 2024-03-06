import { Button, Modal, Table } from "react-bootstrap"
import CartItem from "./CartItem";
import {  useContext, } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {

    const {items} = useContext(CartContext);

    // console.log(items);

    return (
        <Modal show={true} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{ textAlign: "center", width: "100%", fontStyle: "italic" }}>CART</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((ele) => (
                            <CartItem ele={ele} />
                        ))}
                        {/* {cartCntx.items.map((ele) => (
                            <CartItem ele={ele} />
                        ))} */}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onClose}>
                    PURCHASE
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Cart;
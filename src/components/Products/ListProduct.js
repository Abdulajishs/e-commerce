import { Button, Col } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import classes from "./ListProduct.module.css"
import { Link } from "react-router-dom";

const Listproduct = (props) => {
    const { item } = props;
    const cntx = useContext(CartContext)

    const addItemToCartHandler = (event) => {
        event.preventDefault()
        cntx.addItemToCart({ ...item, quantity: 1 })
    }

    return (
        <Col md={6} >
            <div className={classes["product-container"]}>
                <h3>{item.title}</h3>
                <div className={classes["image-container"]}>
                    <Link to={`/product/${item.id}`}>
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className={classes["product-image"]}
                        />
                    </Link>
                </div>
                <p>${item.price}</p>
                <Button variant="primary" onClick={addItemToCartHandler}>ADD TO CART</Button>
            </div>
        </Col>
    )
}

export default Listproduct;
import { Button, Col } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Listproduct =(props)=>{
    const {item} = props;
    const cntx= useContext(CartContext)

    const addItemToCartHandler = (event) =>{
        event.preventDefault()
        cntx.addItemToCart({...item,quantity:1})
    }

    return(
        <Col md={6} >
                <div style={{padding:"10% 25% 20% 25%"}}>
                    <h3>{item.title}</h3>
                    <img src={item.imageUrl} alt={item.title}  />
                    <p>${item.price}</p>
                    <Button variant="primary" onClick={addItemToCartHandler}>ADD TO CART</Button>
                </div>
                </Col>
    )
}

export default Listproduct;
import {  Row } from "react-bootstrap";
import Listproduct from "./ListProduct";
import productsArr from "./ProductsArr";

const Products = (porps) => {
    
    return (
        <Row >
            {productsArr.map((item) => (
                <Listproduct item={item} />
            ))}
        </Row>
    )
}

export default Products;
import { useParams } from "react-router-dom";
import Title from "../components/Layout/Header/Title";
import productsArr from "../components/Products/ProductsArr";
import { Container } from "react-bootstrap";

const ProductDetails = ()=>{
    const {id} = useParams();

    const product = productsArr.find(product => product.id === parseInt (id))
    console.log(product);

    return(
        <>
        <Title />
        <Container>
        <h2>{product.title}</h2>
        <div>
            other images
        </div>
        <div>
            Reviews
        </div>
        </Container>
        </>
    )
}
export default ProductDetails;
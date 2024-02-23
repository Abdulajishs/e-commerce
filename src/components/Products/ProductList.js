import { Button, Col, Row } from "react-bootstrap";

const ProductLists = (porps) => {
    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]
    return (
        <Row >
            {productsArr.map((item) => (
                <Col md={6} >
                <div style={{padding:"10% 25% 20% 25%"}}>
                    <h3>{item.title}</h3>
                    <img src={item.imageUrl} alt={item.title}  />
                    <p>${item.price}</p>
                    <Button variant="primary">ADD TO CART</Button>
                </div>
                </Col>
                
            ))}
        </Row>
    )
}

export default ProductLists;
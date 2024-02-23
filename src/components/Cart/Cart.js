import { Button, Modal, Table } from "react-bootstrap"

const Cart = (props) => {
    const cartElements = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }
    ]

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
                        {cartElements.map((ele) => (
                            <tr>
                                <td>
                                    {<img src={ele.imageUrl} alt={ele.title} />}
                                    {ele.title}
                                </td>
                                <td>{ele.price}</td>
                                <td>{ele.quantity}<Button variant="danger" size="sm" >REMOVE</Button> </td>
                            </tr>
                        ))}
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
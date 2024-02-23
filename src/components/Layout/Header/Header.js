import { useContext } from "react";
import { Badge, Button, Card, Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../../../store/cart-context";

const Header = (props) => {

  const cntx =useContext(CartContext);

  const total = cntx.items.reduce((acc,curr)=> acc+curr.quantity,0)

  const cardHeaderStyle = {
    fontSize: '6em',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'sans',
    backgroundColor: '#777777',
    padding: "0px 20px 75px 20px"

  }

  return (
    <>
      <Navbar bg="black" variant="dark" style={{ height: "40px" }} >
        <Container className="justify-content-center " >
          <Nav className="text-white" style={{ fontFamily: 'sans' }}>
            <Nav.Link href="#" style={{ marginRight: '50px', fontSize: '1.1em' }}>HOME</Nav.Link>
            <Nav.Link href="#" style={{ marginRight: '50px', fontSize: '1.1em' }}>STORE</Nav.Link>
            <Nav.Link href="#" style={{ marginRight: '50px', fontSize: '1.1em' }}>ABOUT</Nav.Link>
          </Nav>
        </Container>
        <Button type="submit" onClick={props.onShowCart} className="bg-black border-primary" variant="dark">
          cart <Badge bg="primary">{total}</Badge>
        </Button>

      </Navbar>

      <Card className="text-center">
        <Card.Header style={cardHeaderStyle}> The Generics</Card.Header>
      </Card>
    </>

  )
}

export default Header;
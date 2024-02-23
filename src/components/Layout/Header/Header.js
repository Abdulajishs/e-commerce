import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = (props) => {

  return (
    <Navbar bg="black" variant="dark" style={{ height: "40px" }} >
      <Container className="justify-content-center " >
        <Nav className="text-white" style={{ fontFamily: 'sans' }}>
          <Nav.Link href="#" style={{ marginRight: '50px', fontSize: '1.1em' }}>HOME</Nav.Link>
          <Nav.Link href="#" style={{ marginRight: '50px', fontSize: '1.1em' }}>STORE</Nav.Link>
          <Nav.Link href="#" style={{ marginRight: '50px', fontSize: '1.1em' }}>ABOUT</Nav.Link>
        </Nav>
      </Container>
      <Button type="submit" onClick={props.onShowCart} className="bg-black border-primary" variant="dark">
          cart <Badge bg="primary">0</Badge>
        </Button>

    </Navbar>


  )
}

export default Header;
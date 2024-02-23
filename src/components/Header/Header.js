import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="black" variant="dark" style={{height: "40px"}} >
      <Container className="justify-content-center " >
        <Nav className="text-white" style={{ fontFamily: 'sans' }}>
          <Nav.Link href="#" style={{ marginRight: '50px', fontSize: '1.1em' }}>HOME</Nav.Link>
          <Nav.Link href="#" style={{ marginRight: '50px', fontSize: '1.1em' }}>STORE</Nav.Link>
          <Nav.Link href="#" style={{ marginRight: '50px', fontSize: '1.1em' }}>ABOUT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default Header;
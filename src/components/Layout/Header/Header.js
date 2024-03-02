import { useContext } from "react";
import { Badge, Button,  Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../../../store/cart-context";

import classes from "./Header.module.css"

const Header = (props) => {

  const cntx = useContext(CartContext);
  // console.log(cntx.items);

  const total = cntx.items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
      <Navbar bg="black" variant="dark" >
        <Container className="justify-content-center" >
          <Nav style={{ fontFamily: 'sans' }}>
            <NavLink to="/" className={classes.navLinkStyle} end>HOME</NavLink>
            <NavLink to="/store" className={classes.navLinkStyle}>STORE</NavLink>
            <NavLink to="/about" className={classes.navLinkStyle}>ABOUT</NavLink>
            <NavLink to="/contact" className={classes.navLinkStyle}>CONTACT US</NavLink>
          </Nav>
        </Container>
        <Button type="submit" onClick={props.onShowCart} className="bg-black border-primary" variant="dark">
          cart
          <Badge bg="primary">
            {total}
          </Badge>
        </Button>
      </Navbar>
  )
}

export default Header;
import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  const cartItems = useSelector((state) => state.addcartReducer.cartData);
  //commenttttttttttttttttt
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>My App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact us</Nav.Link>
              </LinkContainer>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
              {/* updste */}
            </Nav>
            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link>
                  {" "}
                  <i className="fas fa-shopping-cart"></i>
                  <span className="cart_item_styling">
                    {cartItems.length === 0 ? "" : cartItems.length}
                  </span>
                  <span className="cartstyle">cart</span>
                </Nav.Link>
              </LinkContainer>
              <Nav.Link>
                <i className="fas fa-user"></i> signin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

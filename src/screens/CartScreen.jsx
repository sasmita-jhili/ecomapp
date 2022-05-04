import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Row, Col } from "react-bootstrap";
import Rating from "../components/Rating";
import {
  addtoCart,
  decreseItem,
  removefromCart,
} from "../redux/action/productsAction";
const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.addcartReducer.cartData);
  return (
    <>
      {cartItems.length === 0 ? (
        <h3 className="text-center">Your Cart is empty</h3>
      ) : (
        <div className="cart_Container">
          {cartItems.map((elem, idx) => {
            return (
              <>
                <Container key={idx} className="mt-2">
                  <Row>
                    <Col>
                      <img
                        className="cart-img "
                        alt="product"
                        src={`${elem.images[0]}`}
                      />
                    </Col>
                    <Col className="text-center align-self-center">
                      <h4>
                        <strong>{elem.brand}</strong>
                      </h4>
                      <h6>{elem.title}</h6>
                      <h6>
                        <Rating value={elem.rating} />
                      </h6>
                    </Col>
                    <Col className="text-center align-self-center ">
                      <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                          <Row>
                            <Col className="p-0 text_price text-start" md={12}>
                              <strong className="countPading">
                                ₹{elem.price}
                              </strong>
                            </Col>
                            <Col
                              className=" p-1 pmd_btn "
                              md={4}
                              type="button"
                              onClick={() =>
                                dispatch(decreseItem(cartItems, elem))
                              }
                            >
                              <i className="fa-solid fa-minus"></i>
                            </Col>
                            <Col className="p-1" md={3}>
                              <span className="countPading">{elem.count}</span>
                            </Col>
                            <Col
                              className="p-1 pmd_btn"
                              md={4}
                              type="button"
                              onClick={() =>
                                dispatch(addtoCart(cartItems, elem))
                              }
                            >
                              <i className="fa-solid fa-plus"></i>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="align-self-center ">
                      <span
                        style={{
                          color: "green",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        Price{" "}
                      </span>
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        {elem.price.toLocaleString("en-IN")} x {elem.count} {""}
                        = Rs. {""}
                        {elem.price * elem.count}
                      </div>
                      <Row>
                        <Col className="mt-2">
                          <Button
                            onClick={() =>
                              dispatch(removefromCart(cartItems, elem))
                            }
                          >
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
                <hr />
              </>
            );
          })}
          <Container>
            <Row className="justify-content-end ">
              <Col md={3}>
                <Row>
                  <Col className="ps-2 align-self-center">
                    <strong>
                      Sub total: {""} Rs.{""}
                      {cartItems
                        .reduce((a, b) => a + b.price * b.count, 0)
                        .toLocaleString("en-IN")}
                    </strong>
                  </Col>
                  <Col type="button" className="placeorder_btn ms-1">
                    Place Order
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default CartScreen;

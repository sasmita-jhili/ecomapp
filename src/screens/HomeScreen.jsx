import React, { useEffect } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, addtoCart } from "../redux/action/productsAction";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(
    (state) => state.productListReducer
  );
  const addData = useSelector((state) => state.addcartReducer.cartData);

  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return (
    <>
      {!products ? (
        <h3 className="message">No internet, Can't get data</h3>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Slider />
          <Container className="p-5">
            <Row>
              {products.map((product, idx) => (
                <>
                  {loading && <div className="spinner-border text-primary" />}
                  <Col key={product.id} sm={12} md={6} lg={3} xl={3}>
                    <Card key={product.id} className="my-3 p-3 rounded">
                      <Card.Img src={product.image} variant="top" />
                      <Card.Body>
                        <Card.Title as="div">
                          {product.title.slice(0, 20).concat("...")}
                        </Card.Title>
                        <Card.Text as="h5">
                          <Rating value={product.rating.rate} />
                        </Card.Text>
                        <Card.Text as="h5">₹{product.price}</Card.Text>
                        <Button
                          color="info"
                          onClick={() => dispatch(addtoCart(addData, product))}
                        >
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              ))}
            </Row>
          </Container>
          <Container fluid className="p-0">
            <Footer />
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;

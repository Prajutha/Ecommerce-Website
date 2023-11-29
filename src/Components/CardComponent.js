import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../Context/shop-context";
const CardComponent = ({ product }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div>
      {" "}
      <Card style={{ width: "25rem", height: "33rem" }} className="text-center">
        <Card.Img
          variant="top"
          style={{ width: "100%", height: "250px" }}
          src={product.images[0]}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text style={{ height: "100px" }}>
            {product.description}
          </Card.Text>
          <Card.Text>
            <h3>{product.price}₹</h3>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button
            variant="primary"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add To Cart {cartItems[product.id] > 0 && cartItems[product.id]}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardComponent;

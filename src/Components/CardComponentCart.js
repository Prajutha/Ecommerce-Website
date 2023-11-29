import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ShopContext } from "../Context/shop-context";
const CardComponentCart = ({ product }) => {
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
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
          <button
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            {" "}
            -{" "}
          </button>
          <input
            value={cartItems[product.id]}
            style={{ width: "10%", textAlign: "center" }}
            disabled={true}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value), product.id);
            }}
          />
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            {" "}
            +{" "}
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardComponentCart;

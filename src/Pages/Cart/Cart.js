import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";
import CardComponentCart from "../../Components/CardComponentCart";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Cart = () => {
  const { productList, cartItems, getTotalCartAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const checkOut = () => {
    var options = {
      key: "rzp_test_hUmqmpmZkMwhW8",
      key_secret: "owdNtY4eFTQELvRKc2C69Lqr",
      amount: totalAmount*100,
      currency: "INR",
      name: "Ecommerce Website",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "prajutha",
        email: "prajutha2012@gmail.com",
        contact: "9066530063",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h1>Your Cart Items</h1>
      {productList.map((product) => {
        if (cartItems[product.id] !== 0) {
          return (
            <div key={product.id}>
              <CardComponentCart product={product} />
            </div>
          );
        }
      })}
      {totalAmount > 0 ? (
        <div>
          <br />
          <h4>Subtotal : {totalAmount}₹</h4>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Continue Shopping
          </Button>
          <span> </span>
          <Button variant="primary" onClick={checkOut}>
            Checkout{" "}
          </Button>
        </div>
      ) : (
        <h4>Your Cart is Empty</h4>
      )}
    </div>
  );
};

export default Cart;

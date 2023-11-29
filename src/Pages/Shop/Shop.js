import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ShopContext } from "../../Context/shop-context";
import CardComponent from "../../Components/CardComponent";

function Shop() {
  const { productList } = useContext(ShopContext);

  if (productList) {
    return (
      <div style={{ marginTop: "30px" }}>
        <Row xs={1} s={2} md={3} className="g-4">
          {productList.map((product) => (
            <Col key={product.id}>
              <CardComponent product={product} />
            </Col>
          ))}
        </Row>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Shop;

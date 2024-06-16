import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return (
    <div>
      {props.ProductList.length > 0 ? (
        props.ProductList.map((product, i) => (
          <Product
            key={i}
            product={product}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
            removeItem={props.removeItem}
            index={i}
          />
        ))
      ) : (
        <h1 style={{ color: "red" }}>No Products in cart</h1>
      )}
    </div>
  );
}

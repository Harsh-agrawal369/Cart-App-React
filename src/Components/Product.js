import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.type}{" "}
          <span class="badge bg-secondary">&#x20B9;{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-primary">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.price * props.product.quantity}
      </div>
      <div className="col-2">
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

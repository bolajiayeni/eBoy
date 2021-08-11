import React from "react";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  console.log(props.location.search);
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : productId: {productId} Qty: {qty}
      </p>
    </div>
  );
}
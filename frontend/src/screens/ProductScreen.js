import React from "react";
import data from "../data";

export default function ProductScreen({ match }) {
  const product = data.products.find(
    (x) => x._id.toString() === match.params.id
  );

  if (!product) {
    return <div className="row center">Product not found</div>;
  } else {
    return (
      <div className="row">
        <div className="col-1">
          <div className="product-page-route">
            Home/{product.category}/{product.name}
          </div>
          <div className="product-page-title"></div>
          <div className="product-page-description"></div>
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>
      </div>
    );
  }
}

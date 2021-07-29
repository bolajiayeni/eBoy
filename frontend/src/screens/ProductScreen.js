import React from "react";
import Rating from "../components/Rating";
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
          <div className="product-page-title">{product.name}</div>
          <div className="product-page-price">$ {product.price}</div>
          <div className="product-page-description">{product.description}</div>
        </div>
        <div className="col-1">
          <img
            className="product-page-img"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="col-1">
          <Rating
            rating={product.rating}
            numOfReviews={product.numOfReview}
          ></Rating>
          <input
            type="button"
            value="Add to cart"
            className="product-buy-btn"
          />
          <div className="product-page-status">
            <div className="span">Status: </div>
            <div className="span">
              {product.price > 100 ? "Expensive" : "Cheap"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

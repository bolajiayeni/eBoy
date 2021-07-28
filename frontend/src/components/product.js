import React from "react";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;

  return (
    <div key={product._id} className="product-card">
      <a href={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} className="product-img" />
      </a>

      <div className="product-card-body">
        <a href={`/products/${product._id}`} className="product-link">
          <h3 className="product-card-title">{product.name}</h3>
        </a>

        <Rating
          rating={product.rating}
          numOfReviews={product.numOfReview}
        ></Rating>

        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
}

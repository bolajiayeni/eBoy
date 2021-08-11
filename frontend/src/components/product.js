import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;

  return (
    <div key={product._id} className="product-card">
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} className="product-img" />
      </Link>

      <div className="product-card-body">
        <Link to={`/products/${product._id}`} className="product-link">
          <h3 className="product-card-title">{product.name}</h3>
        </Link>

        <Rating
          rating={product.rating}
          numOfReviews={product.numOfReview}
        ></Rating>

        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
}

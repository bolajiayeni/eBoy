import React from "react";
import { Link } from "react-router-dom";
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
      <div className="f-flex">
        <div className="col-1 product-page-col">
          <Link to="/" className="product-back-route">
            back to results
          </Link>
          <div className="product-page-title">{product.name}</div>
          <div className="product-page-price">$ {product.price}.00</div>
          <div className="product-page-description">
            " {product.description} "
          </div>
        </div>
        <div className="col-1 product-page-col">
          <img
            className="product-page-img"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="col-1 product-page-col product-cta-block">
          <div className="cta">
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
              <div className="">Status: </div>
              <div
                className={product.price > 100 ? "available" : "unavailable"}
              >
                {product.price > 100 ? "available" : "unavailable"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";

export default function Rating(props) {
  const { rating, numOfReviews } = props;
  return (
    <div className="product-rating">
      <span className="material-icons">{rating >= 1 && "star_rate"}</span>
      <span className="material-icons">{rating >= 2 && "star_rate"}</span>
      <span className="material-icons">{rating >= 3 && "star_rate"}</span>
      <span className="material-icons">{rating >= 4 && "star_rate"}</span>
      <span className="material-icons">{rating >= 5 && "star_rate"}</span>
      <div className="product-num-reviews">{`${numOfReviews} reviews`}</div>
    </div>
  );
}

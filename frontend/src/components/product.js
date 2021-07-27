import React from "react";

export default function Product(props) {
  const { product } = props;

  return (
    <div key={product._id} className="product-card">
      <a href={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="product-img" />
      </a>

      <div className="product-card-body">
        <a href={`/product/${product._id}`} className="product-link">
          <h3 className="product-card-title">{product.name}</h3>
        </a>

        <div className="product-rating">
          <span className="material-icons">star_rate</span>
          <span className="material-icons">star_rate</span>
          <span className="material-icons">star_rate</span>
          <span className="material-icons">star_rate</span>
          <span className="material-icons">star_rate</span>
        </div>

        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
}

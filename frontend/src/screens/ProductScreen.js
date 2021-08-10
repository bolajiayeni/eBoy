import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { detailsProducts } from "../actions/productActions";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  //using useEffect to  import product array from backend
  useEffect(() => {
    dispatch(detailsProducts(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
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

              {product.countInStock > 0 && (
                <>
                  <div className="row center">
                    <div className="product-page-select">
                      <div className="product-qty-label">Quantity: </div>
                      <div className="product-qty-selector-box">
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <input
                    type="button"
                    value="Add to cart"
                    onClick={addToCartHandler}
                    className="product-buy-btn"
                  />
                </>
              )}

              <div className="product-page-status">
                <div className="">Status: </div>
                <div
                  className={
                    product.countInStock > 0 ? "available" : "unavailable"
                  }
                >
                  {product.countInStock > 0 ? "available" : "unavailable"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

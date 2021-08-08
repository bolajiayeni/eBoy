import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { detailsProducts } from "../actions/productActions";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  //using useEffect to  import product array from backend
  useEffect(() => {
    dispatch(detailsProducts(productId));
  }, [dispatch, productId]);

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
      )}
    </div>
  );
}

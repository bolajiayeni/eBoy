import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  //using useEffect to  import product array from backend
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="">
      {/* checking to see if the page is still loading or there is an error */}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {/* rendering a product for each object in the product array using the map function */}
          {products.map((product) => {
            return <Product key={product._id} product={product}></Product>;
          })}
        </div>
      )}
    </div>
  );
}

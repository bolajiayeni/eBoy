import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function HomeScreen() {
  //using useState hooks to set state for product array
  const [products, setProducts] = useState([]);

  //using useState hooks to set state for loading and error components
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //using useEffect to  import product array from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

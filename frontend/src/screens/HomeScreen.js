import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

export default function HomeScreen() {
  //using useState hooks to set state for product array
  const [products, setProducts] = useState([]);

  //using useEffect to  import product array from backend
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="row center">
      {/* rendering a product for each object in the product array using the map function */}
      {products.map((product) => {
        return <Product key={product._id} product={product}></Product>;
      })}
    </div>
  );
}

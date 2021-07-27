import React from "react";
import data from "./data";
import Product from "./components/product";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div className="logo-box">
          <a href="/" className="header-link logo-link">
            eBoy!
          </a>
        </div>
        <div className="nav-link">
          <a href="/cart" className="header-link cart-link">
            Cart
          </a>
          <a href="/signin" className="header-link signin-link">
            Sign In
          </a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => {
            return <Product key={product.id} product={product}></Product>;
          })}
        </div>
      </main>
      <footer className="row center">
        All Rights reserved &copy; Bolaji Ayeni
      </footer>
    </div>
  );
}

export default App;

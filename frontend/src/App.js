import React from "react";
import data from "./data";

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
            return (
              <div key={product._id} className="product-card">
                <a href={`/product/${product._id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
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

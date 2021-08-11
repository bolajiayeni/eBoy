import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="logo-box">
            <Link to="/" className="header-link logo-link">
              eBoy!
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/cart" className="header-link cart-link">
              Cart
              {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin" className="header-link signin-link">
              Sign In
            </Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/products/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
          All Rights reserved &copy; Bolaji Ayeni
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

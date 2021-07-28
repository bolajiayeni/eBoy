import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import ProductScreen from "./components/screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
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

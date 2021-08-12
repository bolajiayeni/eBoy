import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div className="row">
      <div className="cart-item-box">
        <h1 className="cart-title">Shopping cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty
            <Link to="/">Go shopping</Link>
          </MessageBox>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item) => {
              <li className="cart-list-item" key={item.product}></li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

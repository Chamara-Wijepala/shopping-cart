import React from "react";
import RenderCheckoutItems from "./RenderCheckoutItems";
import '../styles/checkout.css';

const Checkout = ({ cart }) => {
  return (
    <div id="Checkout">
      <div id="CheckoutList">
      <RenderCheckoutItems {...{cart}}/>
      </div>
      <p id="TotalPrice">Total: $ 1200</p>
      <button id="CheckoutButton">Checkout</button>
    </div>
  );
};

export default Checkout;

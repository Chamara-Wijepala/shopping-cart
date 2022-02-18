import React from "react";
import '../styles/checkout.css';

const Checkout = () => {
  return (
    <div id="Checkout">
      <div id="CheckoutList">
        <div className="CheckoutItem">
          <div className="CheckoutItemQuantity">12</div>
          <img
            className="ItemImg"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            alt=""
          />
          <div className="ItemInfo">
            <p>Pokeball</p>
            <p>$ 200</p>
          </div>
        </div>
      </div>
      <p id="TotalPrice">Total: $ 1200</p>
      <button id="CheckoutButton">Checkout</button>
    </div>
  );
};

export default Checkout;

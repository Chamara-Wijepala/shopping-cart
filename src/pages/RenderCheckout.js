import React from 'react';

const RenderCheckout = ({ cart, totalPrice }) => {
  const cartItems = cart.map((item, index) => (
    <div className="CheckoutItem" key={index}>
      <div className="CheckoutItemQuantity">{item.quantity}</div>
      <img
        className="ItemImg"
        src={item.sprite}
        alt={item.name}
      />
      <div className="ItemInfo">
        <p>{item.name}</p>
        <p>$ {item.cost * item.quantity}</p>
      </div>
    </div>
  ));

  return (
    <div id="Checkout">
      <div id="CheckoutList">
        { cartItems }
      </div>
      <p id="TotalPrice">Total: $ {totalPrice}</p>
      <button id="CheckoutButton">Checkout</button>
    </div>
  );
};

export default RenderCheckout;

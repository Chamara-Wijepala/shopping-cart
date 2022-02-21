import React from 'react';

const RenderCheckoutItems = ({ cart }) => {
  return (
    cart.map((item, index) => (
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
    ))
  );
};

export default RenderCheckoutItems;

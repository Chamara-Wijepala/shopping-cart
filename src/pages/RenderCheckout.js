import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const RenderCheckout = ({ cart, totalPrice, handleDelete }) => {
  const cartItems = cart.map((item, index) => (
    <div className="CheckoutItem" key={index} id={item.id}>
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
      <RiDeleteBin2Fill className='DeleteItem' onClick={() => {
        handleDelete(item.id)
      }} />
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

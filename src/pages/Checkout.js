import React from "react";
import RenderCheckout from "./RenderCheckout";
import '../styles/checkout.css';

const Checkout = ({ cart }) => {


  return (
    <RenderCheckout {...{cart}} />
  );
};

export default Checkout;

import React, { useState } from "react";

function Cart(props){



  const cartItems = [];

  props.items.map((item) => {
    if(item.quantity > 0){
      cartItems.push(
        <div className='cart-item-row'>
          <div className="cart-item-name cart-col">
            {item.name}
          </div>
          <div className="cart-item-price cart-col">
            $ {item.price}
          </div>
          <div className="cart-item-quantity cart-col">
            {item.quantity}
          </div>
          <div className="cart-item-total cart-col">
            {item.price*item.quantity}
          </div>
        </div>
      );
    }
  })

  return (
    <div className="cart" >
      <h1 className="cart-title"> Shopping Cart </h1>
      <div className="cart-contents">
        <div className='cart-item-row'>
          <div className="cart-item-name cart-col">
            Item
          </div>
          <div className="cart-item-price cart-col">
            Price
          </div>
          <div className="cart-item-quantity cart-col">
            Quantity
          </div>
          <div className="cart-item-total cart-col">
            Total
          </div>
        </div>
        {cartItems}
        <div className="cart-total">
          Total Price: $  {cartItems.length > 0 ? props.total.toFixed(2) : "0.00"}
        </div>
        <button className="submit-order-button">
          Submit Order
        </button>
      </div>
    </div>
  )
}

export default Cart;

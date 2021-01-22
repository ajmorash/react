import React, { useState, useEffect } from "react";
import ShopTile from './ShopTile.js';
import './Shop.css';
import Cart from './Cart.js';

function Shop(){

  var data = require('./ShopContent.json');

  let initialState = data.Tiles.map(item => {
    var x = {
      "name": item.name,
      "price": item.price,
      "image": item.image,
      "quantity": 0,
    }
    return x;
  })

  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState(initialState);

  const handleQuantityChange = (name, newQuantity) => {
    const updatedTiles = [...items];
    updatedTiles.map((tile) =>
      {
        if(tile.name == name){
          tile.quantity = newQuantity;
        }
      }
    )
    setItems(updatedTiles);
  }

  const updateTotal = () => {
    var newTotal = 0;
    items.map((item) => {
      newTotal += (item.price*item.quantity);
    })
    setTotal(newTotal);
  }

  const updateQuantity = () => {
    var newQuantity = 0;
    items.map((item) => {
      newQuantity += item.quantity;
    })
    setQuantity(newQuantity);
  }

  useEffect(() => {
    updateTotal();
    updateQuantity();
  }, [items]);

  const tiles = items.map((item) => ( <ShopTile name={item.name} price={item.price} imageURL = {item.image} handleQuantityChange={handleQuantityChange}/> ));

    return (
      <div  className = "shop-container">
        <div className = "shop-column-1">
          <div className = "shop-totals-container" >
          <div className = "shop-totals" >
            Total: ${total.toFixed(2)}  ({quantity})
          </div>
          <button className = "shop-cart-button"> Checkout </button>
          </div>
          <div className = "shop-tiles-container">
            {tiles}
          </div>
        </div>
        <div className = "shop-column-2">
          <div className = "shop-cart-container">
            <Cart items={items} total={total}/>
          </div>
        </div>
      </div>
    )
}

export default Shop;

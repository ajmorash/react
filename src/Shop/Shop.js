import React, { useState } from "react";
import ShopTile from './ShopTile.js';

function Shop(){
  const [total, setTotal] = useState(0);

  const getPriceFromTile = (PriceData) => {
    setTotal(PriceData);
  }

    return (
      <div>
        <div className = "shop-total" >
          {total}
        </div>
        <ShopTile passPriceToShop = {getPriceFromTile} />
        <ShopTile passPriceToShop = {getPriceFromTile} />
      </div>
    )
}

export default Shop;

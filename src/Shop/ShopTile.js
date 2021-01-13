import React, {useEffect, useState} from 'react';

function ShopTile({passPriceToShop}){

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(5);

  const  increaseCount = () => {
    setCount(count+1);
  }

  const decreaseCount = () => {
    if(count>0){
      setCount(count-1);
    }
  }

  const handleChange = (event) => {
    const newCount = parseInt(event.target.value);
    setCount(newCount);
  }

  useEffect(() => {
    passPriceToShop(price*count);
  }, [count]);

  return (
    <div className = "shop-tile" >
        <div className = "shop-tile-image" >Image</div><br />
        <div className = "shop-tile-name" >
          <p>Name</p>
        </div>
        <div className = "shop-tile-price" >
          <p>${price}</p>
        </div>
        <button className = 'shop-tile-plus' onClick={decreaseCount}> - </button>
        <input className = 'shop-tile-count'
        value = {count}
        onChange = {handleChange}
        type = "number" />
        <button className = 'shop-tile-minus' onClick = {increaseCount}> + </button>
    </div>
  )
}

export default ShopTile;

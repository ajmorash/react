import React, {useEffect, useState} from 'react';

function ShopTile(props){

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(props.price);

  const  increaseCount = () => {
    setCount(count+1);
  }

  const decreaseCount = () => {
    if(count>0){
      setCount(count-1);
    }
  }

  const handleChange = (event) => {
    console.log("first");
    const newCount = parseInt(event.target.value);
    setCount(newCount);
  }

  useEffect(() => {
    props.handleQuantityChange(props.name, count);
  }, [count]);

  return (
    <div className = "shop-tile" >
        <div className = "shop-tile-image" >
          <img src={props.imageURL} />
        </div>
        <div className = "shop-tile-name" >
          <p>{props.name}</p>
        </div>
        <div className = "shop-tile-price" >
          <p>${price.toFixed(2)}</p>
        </div>
        <button className = 'shop-tile-changer shop-tile-minus' onClick={decreaseCount}> - </button>
        <input className = 'shop-tile-count'
        value = {count}
        onChange = {handleChange}
        type = "number" />
        <button className = 'shop-tile-changer shop-tile-plus' onClick = {increaseCount}> + </button>
    </div>
  )
}

export default ShopTile;

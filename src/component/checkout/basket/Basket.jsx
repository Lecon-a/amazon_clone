import React from 'react'
import "./Basket.css";
import headset from "../../../assets/images/game/headset.jpg";


function Basket({ display }) {
  
  const handleRemoveItem = () => {
      alert("Remove Item")
  }

  return (
    <div className={display ? 'basket__grid' : 'basket'}>
      <img src={headset} alt="product selected" />
      <div className="selected__product__info">
        <h2><strong>Headset</strong></h2>
        {display ? "" : <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellat vel voluptatibus inventore unde, repudiandae minus iure facilis, soluta esse nam dicta expedita blanditiis! Debitis corporis cumque temporibus fuga incidunt!</div>}
        <div>
          <small>$<h3>99.99</h3> </small>
          <small>Color: <strong>Cyan</strong></small>
        </div>
        <button className='remove__button' onClick={handleRemoveItem}>Remove</button>
      </div>
    </div>
  )
}

export default Basket

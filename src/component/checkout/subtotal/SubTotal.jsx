import React from 'react'
import "./SubTotal.css";

function SubTotal() {

  const handleProceedToCheckout = () => {
    alert("Proceed to Checkout");
  }

  return (
    <div className='subtotal'>
          <p>Subtotal (0 items): <strong>0</strong></p>
          <small className='subtotal__gift'>
              <input type="checkbox" /> This order contains a gift
          </small>
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal

// npm install react-currency-format
// npm install react-redux
// npm install stripe


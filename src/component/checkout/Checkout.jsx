import "./Checkout.css";
import SubTotal from "./subtotal/SubTotal";

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__container">
            <div className="checkout__left">
              {/* ads first */}
              <div className="checkout__ads">
                {/* 100% x 100px banner */}
              </div>
              <h2 className="checkout__title">
                  Your shopping Basket
              </h2>
              <div className="basket__wrapper">
                {/* Basket goes here */}
                All added products
              </div>
            </div>
            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    </div>
  )
}

export default Checkout

import { useState } from "react";
import "./Checkout.css";
import SubTotal from "./subtotal/SubTotal";
import Basket from "./basket/Basket";
import { useAppSelector } from "../../redux/hooks";

function Checkout() {

  const { basket, user } = useAppSelector(state => state.basket)
  const [display, setDisplay] = useState(false);

  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__left">
          {/* ads first */}
          <div className="checkout__ads">{/* 100% x 100px banner */}</div>
          <h2 className="checkout__title">
            {/* <h3>Hello, {user.email}</h3> */}
            Your shopping Basket
            <div
              className={
                display
                  ? "change__orientation__vertical"
                  : "change__orientation"
              }
              onClick={() => {
                setDisplay(!display);
              }}
            >
              <div className={display ? "bars__full" : "bars"}></div>
              <div className={display ? "bars__full" : "bars"}></div>
              <div className={display ? "bars__full" : "bars"}></div>
              <div className={display ? "bars__full" : "bars"}></div>
            </div>
          </h2>
          <div
            className={display ? "basket__wrapper__grid" : "basket__wrapper"}
          >
            {/* Basket goes here */}
            {basket?.map((item) => (
              <Basket display={display} item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <SubTotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout

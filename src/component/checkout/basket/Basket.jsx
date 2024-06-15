import "./Basket.css";
import { useAppDispatch } from "../../../redux/hooks";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../../redux/cartSlice";

function Basket({ display, item, isPaymentPage }) {

  const dispatch = useAppDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id))
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id))
  };

  return (
    <div className={display ? "basket__grid" : "basket"}>
      <img src={item.product_image} alt="product selected" />
      <div className="selected__product__info">
        <h2>
          <strong>{item.product_name}</strong>
        </h2>
        {display ? (
          ""
        ) : (
          <div className="description">
            {item.description ? item.description : "No description"}
          </div>
        )}
        <div>
          <small>
            $<h3>{item.price}</h3>{" "}
          </small>
          <small>
            Color:{" "}
            <strong>{item.color ? item.color : "Color not specified"}</strong>
          </small>
          <small>
            {Array(item.rating)
              .fill()
              .map(() => "🌟")}
          </small>
        </div>
        {!isPaymentPage && <div className="subtotal__buttons">
          <div className="subtotal__quantity">
            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
            <small>
              <strong>{item.quantity}</strong>
            </small>
            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
          </div>
          <button
            className="remove__button"
            onClick={() => handleRemoveItem(item.id)}
          >
            Remove
          </button>
        </div>}
      </div>
    </div>
  );
}

export default Basket;

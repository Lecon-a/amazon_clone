import "./SubTotal.css";
import { useAppSelector } from '../../../redux/hooks';
import CurrencyFormat from "react-currency-format";
import { totalCostOfItemSelected, totalItemSelected } from "../../../redux/actions";
// import { useHistory } from "react-router-dom";

function SubTotal({isPaymentPage}) {

  // const history = useHistory();
  const { basket } = useAppSelector(state => state.basket);

  const handleProceedToCheckout = () => {
    // history.push("/payment")
  }

  return (
    <div className={isPaymentPage? "payment__page" : "subtotal"}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {isPaymentPage ? "Order Total: " : `Subtotal (${totalItemSelected(basket)}{" "}
              ${totalItemSelected(basket) > 1 ? "items" : "item"}):{" "}`}
              <strong>{value}</strong>
            </p>
            {isPaymentPage ? "" : <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>}
            <button onClick={isPaymentPage ? "" : handleProceedToCheckout}>
              {isPaymentPage ? "Buy Now" : "Proceed to Checkout"}
            </button>
          </>
        )}
        decimalScale={2}
        value={totalCostOfItemSelected(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default SubTotal


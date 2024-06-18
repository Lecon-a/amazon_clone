import "./SubTotal.css";
import { useAppSelector } from '../../../redux/hooks';
import CurrencyFormat from "react-currency-format";
import { totalCostOfItemSelected, totalItemSelected } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

function SubTotal({
  isPaymentPage,
  submit, 
  disabled, 
  processing, 
  succeeded
}) {

  const navigate = useNavigate();
  const { basket } = useAppSelector(state => state.basket);

  const handleProceedToCheckout = () => {
    navigate("/payment")
  }

  return (
    <div className={isPaymentPage? "payment__page" : "subtotal"}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {
                isPaymentPage ? "Order Total: " : `Subtotal (${totalItemSelected(basket)} ${totalItemSelected(basket) > 1 ? "items" : "item"})`
              }
              { " " }<strong>{value}</strong>
            </p>
            {isPaymentPage ? "" : <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>}
            {isPaymentPage ?
              <button onClick={submit} disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
              : <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>}
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


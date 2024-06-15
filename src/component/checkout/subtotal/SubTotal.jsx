import "./SubTotal.css";
import { useAppSelector } from '../../../redux/hooks';
import CurrencyFormat from "react-currency-format";
import { totalCostOfItemSelected, totalItemSelected }  from "../../../redux/actions";

function SubTotal() {

  const { basket } = useAppSelector(state => state.basket);

  const handleProceedToCheckout = () => {
    alert("Proceed to Checkout");
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({totalItemSelected(basket)}{" "}
              {totalItemSelected(basket) > 1 ? "items" : "item"}):{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            <button onClick={handleProceedToCheckout}>
              Proceed to Checkout
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


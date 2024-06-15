import "./CardDetails.css";
import { useAppSelector } from "../../../../redux/hooks";
import SubTotal from "../../subtotal/SubTotal";

// install 
// npm i stripe-js
// npm i @stripe/react-stripe-js
// create stripe account via https://www.stripe.com

function CardDetails() {

    const { basket } = useAppSelector(state => state.basket);

  return (
      <div className="card__details">
          {/* stripe stuff */}
          <h2 className="card__title">Payment Method</h2>
          <div className="card">
              <div className="card__pin">
                  <h2>Card Details</h2>
              </div>
              <div className="summary">
                  <SubTotal isPaymentPage={true} />
              </div>
          </div>
    </div>
  );
}

export default CardDetails

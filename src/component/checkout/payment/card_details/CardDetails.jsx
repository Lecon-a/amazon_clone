import "./CardDetails.css";
import { useAppSelector } from "../../../../redux/hooks";
import SubTotal from "../../subtotal/SubTotal";
import { CardElement } from "@stripe/react-stripe-js";

// backend::
// inside the cloud functions i.e. serverless install
// npm i express for backend
// npm i cors
// npm i stripe


function CardDetails({
  submit,
  disabled,
  succeeded,
  processing,
  cardElementFunction,
}) {
  const { basket } = useAppSelector((state) => state.basket);

  return (
    <div className="card__details">
      {/* stripe stuff */}
      <h2 className="card__title">Payment Method</h2>
      <div className="card">
        <div className="card__pin">
          <h2>Card Details</h2>
        </div>

        <div className="summary">
            <div className="stripe__containter">
                <CardElement onChange={cardElementFunction} />
            </div>
            <SubTotal
                isPaymentPage={true}
                submit={submit}
                disabled={disabled}
                succeeded={succeeded}
                processing={processing}
            />
        </div>
      </div>
    </div>
  );
}

export default CardDetails

import "./Payment.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { totalItemSelected, totalCostOfItemSelected } from "../../../redux/actions";
import DeliveryAddress from "../delivery_address/DeliveryAddress";
import Basket from "../basket/Basket";
import CardDetails from "./card_details/CardDetails";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "./axios";

function Payment() {

    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const { basket, user } = useAppSelector(state => state.basket);

    const [states, setStates] = useState({
        error: null,
        disabled: true,
        succeeded: false,
        processing: "",
    })

    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => { 
        // generate the special stripe secret which allows us to charge consumer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                // Stripe expects the total amount of data in a currency subunits (in cents)
                url: `/payments/create?total=${totalCostOfItemSelected(basket) * 100}`,
            })
            // this will be needed at the backend
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();

    }, [basket]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStates({
            ...states,
            processing: true,
        })

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardDetails),
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setStates({
                ...states,
                succeeded: true,
                error: null,
                processing: false,
            })
            // prevent client error or recurring payments
            navigate("/orders", { replace: true });
        })
        
    }

    const handleChange = (e) => { 
        setStates({
            ...states,
            disabled: e.empty,
            error: e.error ? e.error.message : "",
        });
    }

  return (
    <div className="payment">
      <div className="payment__wrapper">
        {/* Payment Title */}
        <h1 className="payment__title">
          Checkout ({totalItemSelected(basket)}{" "}
          {totalItemSelected(basket) > 1 ? "items" : "item"})
        </h1>
        {/* Delivery Address */}
        <DeliveryAddress />
        {/* List of Item Selected */}
        <div className="review__item">
          <h2 className="review__title">
            Review {totalItemSelected(basket) > 1 ? "items" : "item"} and
            Delivery
          </h2>
          <div className="basket__wrapper">
            {basket?.map((item) => (
              <Basket
                item={item}
                key={item.id}
                isPaymentPage={true}
                display={false}
              />
            ))}
          </div>
        </div>
        {/* Card Details */}
        <form onSubmit={handleSubmit}>
          {/* <CardElement onChange={handleChange} /> */}
          <CardDetails
            submit={handleSubmit}
            cardElementFunction={handleChange}
            disabled={states.disabled}
            processing={states.processing}
            succeeded={states.succeeded}
          />

          {states.error && <div className="error__wrapper">{states.error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Payment;

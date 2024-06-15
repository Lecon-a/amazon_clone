import "./Payment.css";
import { useAppSelector } from "../../../redux/hooks";
import { totalItemSelected } from "../../../redux/actions";
import DeliveryAddress from "../delivery_address/DeliveryAddress";
import Basket from "../basket/Basket";
import CardDetails from "./card_details/CardDetails";
// import { useStripe, useElements, cardElement } from "@stripe/react-stripe-js";
import image from "../../../assets/images/game/headset.jpg";

function Payment() {

    // const stripe = useStripe();
    // const elements = useElements();
    // const { basket, user } = useAppSelector(state => state.basket);

    const [states, setStates] = useState({
        error: null,
        disabled: true,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => { 
        setStates({
            ...states,
            disabled: e.empty,
            error: e.error ? e.error.message : "",
        });
    }

    const basket = [
      {
        id: "prod0001",
        product_image: image,
        product_name: "Headsets",
        price: 24.99,
        rating: 4,
        quantity: 1,
        description: "Product description goes here",
      },
    ];

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
              <Basket item={item} key={item.id} isPaymentPage={true} display={false} />
            ))}
          </div>
        </div>
        {/* Card Details */}
        <CardDetails />
        {/* <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
        </form> */}
      </div>
    </div>
  );
}

export default Payment;

import "./DeliveryAddress.css";

const DeliveryAddress = () => {
  return (
    <div className="address__wrapper">
      <h2 className="address__title">Delivery Address</h2>
      <div className="address">
        <p>
          Email: <strong>{"spaicthub@gmail.com"}</strong>
        </p>
        <p>
          Phone Number: <strong>{"+234810 0000 000"}</strong>
        </p>
        <div className="mailing">
          <p>Mailing: </p>
          <strong>
            123 React Lane
            Army Engineer, Nigeria.
          </strong>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;

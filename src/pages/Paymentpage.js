import React, { useEffect, useState } from "react";
import "./Paymentpage.css";
import { useStatevalue } from "../components/GlobalStateProvider";
import { Link } from "@material-ui/core";
import Checkoutitem from "./Components/Chechoutitem";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../components/GlobalStateManager";
import axios from "../components/axios";
import { useHistory } from "react-router-dom";
import amazonApp from "../components/firebase";
const db = amazonApp.firestore();

function Paymentpage() {
  const [{ basket, user }, disptch] = useStatevalue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientsecret, setClientsecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  useEffect(() => {
    //generate special stripe secrete which allow us charge customer
    const getclientsecrete = async () => {
      const response = await axios({
        method: "post",
        //Stripe expects the total in a currencies subuits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientsecret(response.data.clientsecret);
    };
    getclientsecrete();
    console.log("The secrete is >", clientsecret);
  }, [basket]);

  console.log("The secrete is >", clientsecret);

  const handleSubmit = async (e) => {
    //strpe functionality
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientsecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        disptch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    //listen for the changes in the cardelement and display
    //errors as the customer types thiere card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  //---------------------------------------------
  return (
    <div className="payment">
      {/* <h2>Payment Page</h2> */}

      <h2>
        Checkout (<Link to="/checkout">{basket?.length} items</Link>)
      </h2>

      <div className="payment-section">
        <div className="payment-sectiontitle">
          <h4>Delivery Address</h4>
        </div>
        <div className="payment-address">
          <p>
            {user && <p>{user.emai}</p>}
            Ramchandrapuram, darsi(md), prakasam(dt)
          </p>
        </div>
      </div>

      <div className="payment-section">
        <div className="payment-sectiontitle">
          <h4>Review items and delivery</h4>
        </div>
        <div className="payment-checkoutitems">
          {basket.map((item) => (
            <Checkoutitem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="payment-section">
        <div className="payment-sectiontitle">
          <h4>Payment Method</h4>
        </div>
        <div className="payment-pay">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment-pricecontainer">
              <CurrencyFormat
                renderText={(value) => (
                  <h3 className="payment-total">Order Total : {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
              ></CurrencyFormat>
              <button
                disabled={processing || disabled || succeeded}
                className="payment-buynowbtn"
              >
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Paymentpage;

import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStatevalue } from "../../components/GlobalStateProvider";
import { getBasketTotal } from "../../components/GlobalStateManager";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStatevalue();

  const handleCheckout = () => {
    history.push("/payment");
  };

  return (
    <div className="subtotal">
      {/* <h3>Subtotal</h3> */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order cotains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

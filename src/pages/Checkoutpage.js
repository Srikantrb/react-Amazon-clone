import React from "react";
import "./Checkoutpage.css";
import Subtotal from "./Components/Subtotal";
import Checkoutitem from "./Components/Chechoutitem";
import { useStatevalue } from "../components/GlobalStateProvider";

function Checkoutpage() {
  const [{ basket }, dispatch] = useStatevalue();

  return (
    <div className="checkout">
      {/* <h2>Checkoutpage</h2> */}
      <div className="checkout-left">
        <h2>Your Shopping Basket</h2>

        {/* Item */}
        {/* <Checkoutitem /> */}
        {basket.length == 0 && (
          <h3 className="checkout-emptytag">
            Your cart is empty, please add some items
          </h3>
        )}
        {basket.map((item) => (
          <Checkoutitem
            id={item.id}
            title="adtj jgeygawg jgygdgja ggdj jgjd gjgjg jgj"
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
        {/* Item */}
        {/* Item */}
        {/* Item */}
        {/* Item */}

        {/* Item */}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkoutpage;

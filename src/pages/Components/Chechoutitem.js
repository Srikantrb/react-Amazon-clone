import React from "react";
import { useStatevalue } from "../../components/GlobalStateProvider";
import "./Chechoutitem.css";

function Chechoutitem({ id, title, image, price, rating, hidebutton }) {
  const [{ basket }, dispatch] = useStatevalue();
  const removeFromBasket = () => {
    console.log("removing item");
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutitem">
      {/* <h2>Chechoutitem</h2> */}
      <div className="checkoutitem-image">
        <img src={image} alt=""></img>
      </div>
      <div className="checkoutitem-info">
        <p className="checkoutitem-title">{title}</p>
        <p className="checkoutitem-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutitem-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hidebutton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default Chechoutitem;

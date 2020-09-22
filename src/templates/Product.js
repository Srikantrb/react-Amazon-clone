import React from "react";
import "./Product.css";
import { useStatevalue } from "../components/GlobalStateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStatevalue();

  console.log(basket);
  const addToBasket = () => {
    //dispatch an action
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p className="product-name">{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>🌟</span>
            ))}
        </div>
      </div>

      <img className="product-image" src={image} alt=""></img>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

import React from "react";
import "./Order.css";
import moment from "moment";
import Chechoutitem from "./Chechoutitem";
import { getBasketTotal } from "../../components/GlobalStateManager";
import CurrencyFormat from "react-currency-format";
import { useStatevalue } from "../../components/GlobalStateProvider";

function Order({ order }) {
  const [{ basket, user }, dispatch] = useStatevalue();

  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <Chechoutitem
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hidebutton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order-total">Order Total : {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      ></CurrencyFormat>
    </div>
  );
}

export default Order;

import React, { useEffect, useState } from "react";
import "./Orderspage.css";
import amazonApp from "../components/firebase";
import Order from "./Components/Order";
import { useStatevalue } from "../components/GlobalStateProvider";
const db = amazonApp.firestore();

function Orderspage() {
  const [{ baset, user }, dispatch] = useStatevalue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h2>My Orders</h2>
      {!user && <h4 className="orders-h4">Please login to view your orders</h4>}
      {/* order */}
      {orders?.map((order) => (
        <Order order={order} />
      ))}
      {/*order */}
    </div>
  );
}

export default Orderspage;

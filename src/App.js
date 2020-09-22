import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Checkoutpage from "./pages/Checkoutpage";
import Loginpage from "./pages/Loginpage";
import amazonApp from "./components/firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStatevalue } from "./components/GlobalStateProvider";
import Paymentpage from "./pages/Paymentpage";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orderspage from "./pages/Orderspage";

const promise = loadStripe(
  "pk_test_51HTSkdGkk9aNjstR1IRFZDDLP9GcoUGM2uZpw2dD00aceLBbAjNMWc77EjQBuPellCTLsOVMohm6EE9mx2rffk1D00sEhC1K1S"
);

function App() {
  const [{ basket, user }, dispatch] = useStatevalue();

  useEffect(() => {
    amazonApp.auth().onAuthStateChanged((authuser) => {
      if (authuser) {
        //user just loged in or already logged in
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Loginpage />
          </Route>
          <Route path="/checkout">
            <Navbar />
            <Checkoutpage />
          </Route>
          <Route path="/payment">
            <Navbar />
            <Elements stripe={promise}>
              <Paymentpage />
            </Elements>
          </Route>
          <Route path="/orders">
            <Navbar />
            <Orderspage />
          </Route>
          <Route path="/">
            <Navbar />
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

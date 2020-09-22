import React, { useState } from "react";
import "./Loginpage.css";
import amazonApp from "../components/firebase";
import { Link, useHistory } from "react-router-dom";

function Loginpage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    amazonApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        // console.log(error);
        alert(error);
      });
  };
  const signup = (e) => {
    e.preventDefault();
    amazonApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(response);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        // console.log(error);
        alert(error);
      });
  };

  return (
    <div className="loginpage">
      {/* <h2>Loginpage</h2> */}
      <Link to="/">
        <img
          className="loginpage-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxH9D6IP1cGoB34B8TzufAK28LtiOsyC3DXA&usqp=CAU"
          alt=""
        ></img>
      </Link>

      <div className="loginpage-container">
        <h2>Sign-In</h2>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" className="loginpage-signinbtn" onClick={login}>
            Sign In
          </button>
        </form>
        <p>By sign in your are agreeing to the user terms and conditions.</p>
        <button className="loginpage-signupbtn" onClick={signup}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Loginpage;

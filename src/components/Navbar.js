import React from "react";
import "./Navbar.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStatevalue } from "./GlobalStateProvider";
import amazonApp from "./firebase";

function Navbar() {
  const [{ basket, user }, disptch] = useStatevalue();

  const handleAuth = () => {
    if (user) {
      amazonApp.auth().signOut();
    }
  };

  return (
    <div className="navbar-top">
      {/* <h2>Navbar</h2> */}

      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img
            className="navbar-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF5fQY59y-P7xzrs_zVKfpAgppLlAjknwLSw&usqp=CAU"
            alt=""
          />
        </Link>
      </div>

      {/* Search bar */}
      <div className="navbar-search">
        <input type="text" className="navbar-searchinput"></input>
        <SearchIcon className="navbar-searchicon" />
      </div>
      {/* Nav options */}
      <div className="navbar-options">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="navbar-option">
            <span className="navbar-optionline1">
              Hello, {user ? user.email : "Guest"}{" "}
            </span>
            <span className="navbar-optionline2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="navbar-option">
            <span className="navbar-optionline1">Returns </span>
            <span className="navbar-optionline2"> & Orders</span>
          </div>
        </Link>

        <div className="navbar-option">
          <span className="navbar-optionline1">Try</span>
          <span className="navbar-optionline2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="navbar-carticon">
            <ShoppingCartIcon />
          </div>
        </Link>
        <span className="cart-itemcount">{basket?.length}</span>
      </div>
    </div>
  );
}

export default Navbar;

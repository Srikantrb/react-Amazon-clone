import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Stateprovider } from "./components/GlobalStateProvider";
import { initialstate } from "./components/GlobalStateManager";
import reducer from "./components/GlobalStateManager";

ReactDOM.render(
  <React.StrictMode>
    <Stateprovider initialstate={initialstate} reducer={reducer}>
      <App />
    </Stateprovider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

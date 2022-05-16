import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ModalContextProvider } from "./store/modal-context";
import CartProvider from "./store/CartProvider";

ReactDOM.render(
  <CartProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </CartProvider>,

  document.getElementById("root")
);

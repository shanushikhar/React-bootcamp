import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ModalContextProvider } from "./store/modal-context";

ReactDOM.render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>,
  document.getElementById("root")
);

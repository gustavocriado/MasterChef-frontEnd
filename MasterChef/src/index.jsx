import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import AuthContextProvider from "./Context/context";
import Context from "./Context/context";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("app")
);

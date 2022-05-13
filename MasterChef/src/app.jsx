import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./common/routes/routes";
import "./common/index.css";

export default (props) => (
  <BrowserRouter>
    <Rotas />
  </BrowserRouter>
);

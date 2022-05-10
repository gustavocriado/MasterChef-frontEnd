import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./common/routes/routes";

export default (props) => (
  <div>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </div>
);

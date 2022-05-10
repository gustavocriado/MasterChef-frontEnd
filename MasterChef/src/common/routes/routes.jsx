import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../principal/home";
import Login from "../login/login";
import SingUp from "../singup/singup";

export default () => (
  <Routes>
    <Route element={<Home />} path="/" exact />
    <Route element={<Login />} path="/login" />
    <Route element={<SingUp />} path="/singup" />
  </Routes>
);

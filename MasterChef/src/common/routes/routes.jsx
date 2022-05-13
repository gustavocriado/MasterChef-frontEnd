import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../principal/home";
import Login from "../login/login";
import SingUp from "../singup/singup";
import Register from "../register/register";
import Profile from "../profile/profile";

export default () => (
  <Routes>
    <Route element={<Home />} path="/" exact />
    <Route element={<Login />} path="/login" />
    <Route element={<SingUp />} path="/singup" />
    <Route element={<Register />} path="/register" />
    <Route element={<Profile />} path="/profile" />
  </Routes>
);

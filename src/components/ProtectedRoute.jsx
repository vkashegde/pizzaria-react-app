/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  return cartItems.length > 0 ? element : <Navigate to="/" />;
};

export default ProtectedRoute;

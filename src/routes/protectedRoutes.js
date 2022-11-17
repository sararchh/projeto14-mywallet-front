import React from 'react';
import { Navigate } from 'react-router-dom';

const isLogged = localStorage.getItem("token");

export default function ProtectedRoutes({ children }) {

  if (!isLogged) {
    return <Navigate to="/" />
  }


  return children;
}

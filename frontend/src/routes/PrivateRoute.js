import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';  // Corrigindo a importação

const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />; // Redireciona para a página de login
  }

  try {
    const decodedToken = jwtDecode(token);  // Decodificando o token
    const currentTime = Date.now() / 1000;  // Tempo atual em segundos

    // Se o token estiver expirado
    if (decodedToken.exp < currentTime) {
      return <Navigate to="/" />;  // Redireciona para login se expirado
    }
  } catch (error) {
    // Caso o token não seja válido
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;

import "../index.css";
import "../global.css";
import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Login from "../paginas/Tela_Login/Login";
import Home from "../paginas/Tela_home/Home";
import Navbar from "../components/Navbars/Navbar"; // Importando o Navbar
import PrivateRoute from "./PrivateRoute"; // Importando o PrivateRoute
import Formulario from "../paginas/Tela_Formulario/Formulario";

const Rotas = () => {
  const location = useLocation(); // Obtém a rota atual
  const token = localStorage.getItem("token"); // Verifica se o usuário está logado

  return (
    <div>
      {/* Exibe o Navbar se não estiver na página de login ou formulário */}
      {location.pathname !== "/" && location.pathname !== "/formulario" && <Navbar />}

      <Routes>
        {/* Rota pública */}
        <Route path="/" element={<Login />} />
        <Route path="/formulario" element={<Formulario />} />
        
        {/* Rota protegida */}
        <Route
          path="/home"
          element={<PrivateRoute element={Home} />}
        />

        {/* Redirecionamento para rotas inválidas */}
        <Route
          path="*"
          element={token ? <Navigate to="/home" /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
};

export default Rotas;

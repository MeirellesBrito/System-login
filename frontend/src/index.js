import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes/Routes";
import "./global.css"; // Importe o arquivo CSS global

// Importe createRoot da biblioteca react-dom/client
import { createRoot } from "react-dom/client";

// Crie uma instância root usando createRoot
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Rotas />
  </Router>
);

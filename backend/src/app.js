const express = require("express");
const cors = require("cors"); // Importa o CORS
const router = require("./Router"); // Suas rotas

const app = express();

// Middleware CORS
app.use(cors()); // Configuração básica do CORS

// Middleware para parsing do corpo da requisição
app.use(express.json());

// Chama a função router para configurar todas as rotas
router(app);

module.exports = app;

const express = require("express");

const usuario = require("./usuarioRoute");
const telefones = require('./telefoneRoute')
const auth = require("./authRoute");
const endereco = require('./enderecoRoute')
const login = require("./loginRoute");

module.exports = (app) => {
  app.use(
    express.json(),
    auth,
    usuario,
    telefones,
    endereco,
    login,

  );
};

const AuthService = require("../services/authService");
const authService = new AuthService();

class AuthController {
  static async login(req, res) {
    const { login, senha } = req.body;
    const { compare } = require("bcryptjs");
    const { sign } = require("jsonwebtoken");
    const jsonSecret = require("../config/jsonSecret");
    const Database = require("../models");

    try {
      // Autentica o usuário usando o serviço
      const token = await authService.login({ login, senha });

      // Retorna o token em um objeto
      res.status(200).json({ token });  // Aqui retornamos um objeto com a chave 'token'
    } catch (error) {
      // Em caso de erro, retorna o erro com status 401
      res.status(401).json({ message: error.message });
    }
  }
}

module.exports = AuthController;

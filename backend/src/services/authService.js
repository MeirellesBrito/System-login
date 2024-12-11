const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const jsonSecret = require("../config/jsonSecret");
const Database = require("../models"); // Certifique-se de que o caminho está correto

class AuthService {
  async login(dto) {
    // Corrigindo a propriedade "attributes" (não "attribute")
    const usuario = await Database.Login.findOne({
      attributes: ["login", "senha"], // O nome correto é "attributes"
      where: {
        login: dto.login,
      },
    });

    if (!usuario) {
      throw new Error("Usuário não cadastrado");
    }

    // Comparando a senha fornecida com a senha armazenada
    const senhaIguais = await compare(dto.senha, usuario.senha);
    if (!senhaIguais) {
      throw new Error("Usuário ou senha inválida");
    }

    // Gerando o token
    if (!jsonSecret.secret) {
      throw new Error("Token secret não está definido");
    }

    const accessToken = sign(
      {
        id: usuario.id,
        login: usuario.login,
      },
      jsonSecret.secret, // Certifique-se de que o segredo está correto
      {
        expiresIn: 86400, // 24 horas
      }
    );

    return accessToken;
  }
}

module.exports = AuthService;

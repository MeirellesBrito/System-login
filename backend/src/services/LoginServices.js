const database = require("../models");
const { hash } = require("bcryptjs");
const uuid = require("uuid");

class LoginService {
  async cadastrar(dto) {
    // Verificar se já existe login com o mesmo nome
    const loginExistente = await database.Login.findOne({
      where: { login: dto.login },
    });

    if (loginExistente) {
      throw new Error("Usuário já cadastrado");
    }

    try {
      // Hash da senha
      const senhaHash = await hash(dto.senha, 8);

      // Criar novo login
      const novoLogin = await database.Login.create({
        id: uuid.v4(),         // ID como UUID
        login: dto.login,      // Login
        senha: senhaHash,      // Senha criptografada
        usuario_id: dto.usuario_id, // ID do usuário
      });

      return novoLogin;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuário");
    }
  }
}

module.exports = LoginService;

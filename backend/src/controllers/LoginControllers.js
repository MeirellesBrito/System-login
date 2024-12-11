const LoginService = require("../services/LoginServices");

const loginService = new LoginService();

class LoginControllers {
  static async cadastrar(req, res) {
    const { login, senha , usuario_id } = req.body;
    try {
      const loginCadastro = await loginService.cadastrar({ login, senha ,usuario_id});
      res.status(201).send(loginCadastro);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
module.exports = LoginControllers;

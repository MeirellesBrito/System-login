const Controller = require('./Controllers')
const UsuarioServices = require('../services/UsuarioServices')

const usuarioServices = new UsuarioServices()

class UsuarioController extends Controller {
  constructor(){
    super(usuarioServices)
  }
}

module.exports = UsuarioController;
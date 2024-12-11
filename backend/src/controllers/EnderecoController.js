const Controller = require('./Controllers')
const EnderecoServices = require('../services/EnderecoServices')

const enderecoServices = new EnderecoServices()

class EnderecoController extends Controller {
  constructor(){
    super(enderecoServices)
  }
}

module.exports = EnderecoController;
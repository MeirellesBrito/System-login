const Controller = require('./Controllers')
const TelefoneServices = require('../services/TelefoneServices')

const telefoneServices = new TelefoneServices()

class TelefoneController extends Controller {
  constructor(){
    super(telefoneServices)
  }
}

module.exports = TelefoneController;
const { where } = require("sequelize");
const dataSourse = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAllRegistros() {
    return dataSourse[this.model].findAll();
  }

  // async getAllRegistro() {
  //   try {
  //     return dataSourse[this.model].findAll();
  //   } catch (error) {
  //     throw new Error("Erro ao buscar os Registros:");
  //   }
  // }

  async createRegistro(dadosDoRegistros) {
    try {
      return dataSourse[this.model].create(dadosDoRegistros);
    } catch (error) {
      throw new Error("Erro ao tentar registrar:");
    }
  }

  async getRegistro(id) {
    try {
      return await dataSourse[this.model].findOne({ where: { id } });
    } catch (error) {
      throw new Error("Erro ao buscar o Registro:");
    }
  }

  async updateRegistro(id, dadosAtualizados) {
    try {
      const registro = await dataSourse[this.model].findOne({ where: { id } });
      if (!registro) {
        throw new Error("Registro nao encontrado");
      }
      return await registro.update(dadosAtualizados);
    } catch (error) {
      throw new Error("Erro ao atualizar p registro");
    }
  }
  async deleteRegistro(id) {
    try {
      const registro = await dataSourse[this.model].findOne({ where: { id } });
      if (!registro) {
        throw new Error("Registro nao encontrado");
      }
      return await registro.destroy();
    } catch (error) {
      throw new Error("Erro ao Deletar o registro");
    }
  }
}

module.exports = Services;

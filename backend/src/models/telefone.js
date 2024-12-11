'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telefone extends Model {
    static associate(models) {
      Telefone.belongsTo(models.Usuario, {
        foreignKey: "id", // Use "id" como a chave estrangeira
        targetKey: "id",  // Especifica que a chave primária no modelo "Usuario" é "id"
        as: "usuario", // Alias para o relacionamento
      });
    }
  }
  Telefone.init({
    numero: DataTypes.STRING,
    tipo: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Telefone',
    tableName: "Telefones",
  });
  return Telefone;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Certifique-se de que 'usuario_id' corresponde à chave estrangeira do modelo 'Usuarios'
      Endereco.belongsTo(models.Usuario, {
        foreignKey: "id", // Use "id" como a chave estrangeira
        targetKey: "id",  // Especifica que a chave primária no modelo "Usuario" é "id"
        as: "usuario", // Alias para o relacionamento
      });
    }
  }
  Endereco.init({
    numero: DataTypes.STRING,
    rua: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    cep: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER  // Certifique-se de que o nome do campo aqui é 'usuario_id'
  }, {
    sequelize,
    modelName: 'Endereco',
    tableName: "Enderecos",
  });
  return Endereco;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // Um usuário tem um login
      Usuario.hasOne(models.Login, {
        foreignKey: "usuario_id",
        as: "Logins",
      });
      
      // Um usuário pode ter muitos telefones (alterado de 'hasOne' para 'hasMany')
      Usuario.hasMany(models.Telefone, {
        foreignKey: "usuario_id",
        as: "telefones",  // Plural, pois pode ter múltiplos telefones
      });

      // Se o usuário tiver apenas um endereço, 'hasOne' é correto
      // Caso contrário, altere para 'hasMany' se permitir múltiplos endereços
      Usuario.hasOne(models.Endereco, {
        foreignKey: "usuario_id",
        as: "enderecos",  // Singular, já que estamos assumindo que é um endereço por usuário
      });
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    sobreNome: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: "usuarios", // Nome da tabela no banco de dados
  });
  return Usuario;
};

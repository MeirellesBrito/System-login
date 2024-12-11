"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Login extends Model {
    static associate(models) {
      Login.hasOne(models.Usuario, {
        foreignKey: "id", // Use "id" como a chave estrangeira
        targetKey: "id",  // Especifica que a chave primária no modelo "Usuario" é "id"
        as: "usuario", // Alias para o relacionamento
      });
    }
  }
  Login.init(
    {
      login: DataTypes.STRING,
      senha: DataTypes.STRING,
      usuario_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Login",
      tableName: "Logins",
      defaultScope: {
        attributes: {
          exclude: ["senha"],
        },
      },
    }
  );
  return Login;
};

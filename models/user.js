"use strict";
const { Model } = require("sequelize");
const { hashThePassword } = require("../helpers/encryption");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Movie, {
        foreignKey: "authorId",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true,
        },
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
          len: {
            args:[5],
            msg:"Password minimum 5 charackter"
          },
        },
      },
      role: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => {
    user.password = hashThePassword(user.password);
    if (!user.role) user.role = "Admin";
  });
  return User;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Casts extends Model {
    static associate(models) {
      Casts.hasMany(models.MovieCasts);
    }
  }
  Casts.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      profilePict: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Casts",
    }
  );
  return Casts;
};

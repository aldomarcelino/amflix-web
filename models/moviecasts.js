"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MovieCasts extends Model {
    static associate(models) {
      MovieCasts.belongsTo(models.Movie);
      MovieCasts.belongsTo(models.Casts);
    }
  }
  MovieCasts.init(
    {
      MovieId: DataTypes.INTEGER,
      CastsId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MovieCasts",
    }
  );
  return MovieCasts;
};

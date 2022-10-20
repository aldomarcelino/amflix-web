"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      Movie.belongsTo(models.User, {
        foreignKey: "authorId",
      });
      Movie.belongsTo(models.Genre, {
        foreignKey: "genreId",
      });
      Movie.hasMany(models.MovieCasts);
    }
  }
  Movie.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      imgUrl: DataTypes.TEXT,
      synopsis: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      trailerUrl: DataTypes.STRING,
      slug: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
          notNull: true,
          min: 1,
        },
      },
      popularity: DataTypes.INTEGER,
      poster_path: DataTypes.STRING,
      genreId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};

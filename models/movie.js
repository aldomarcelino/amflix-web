"use strict";
const { Model } = require("sequelize");
const generateSlug = require("../helpers/sluggen");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      Movie.belongsTo(models.User, {
        foreignKey: "authorId",
      });
      Movie.hasMany(models.GenreMovie);
      Movie.hasMany(models.MovieCast);
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
      slug: DataTypes.STRING,
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
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  Movie.beforeCreate((movie) => {
    movie.slug = generateSlug(movie.title);
  });
  return Movie;
};

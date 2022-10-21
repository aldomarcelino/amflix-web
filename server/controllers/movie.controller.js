const { Genre, Casts, MovieCasts, Movie } = require("../models");

class MovieController {
  static async showAllMovie(req, res, next) {
    try {
      let data = await Movie.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async showAllGenre(req, res, next) {
    try {
      let data = await Genre.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async addNewMovies(req, res, next) {
    try {
      const { title, imgUrl, synopsis, popularity, rating } = req.body;
      await Movie.create({
        title,
        imgUrl,
        synopsis,
        popularity,
        rating,
        authorId: req.user.id,
      });
      res.status(201).json({ message: "Movie added successfully" });
    } catch (err) {
      next(err);
    }
  }

  static async addNewGenre(req, res, next) {
    try {
      const { name } = req.body;
      await Genre.create({ name });
      res.status(201).json({ message: "genre created successfully" });
    } catch (err) {
      next(err);
    }
  }

  static async updateTheGenre(req, res, next) {
    try {
      const { name } = req.body;
      await Genre.update({ name }, { where: { id: req.params.id } });
      res.status(201).json({ message: "genre updated successfully" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteTheMovie(req, res, next) {
    try {
      let data = await Movie.findByPk(req.params.id);
      if (!data) throw { name: "Not Found" };
      await Movie.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: ` ${data.title} success to delete` });
    } catch (err) {
      next(err);
    }
  }

  static async deleteTheGenre(req, res, next) {
    try {
      let data = await Genre.findByPk(req.params.id);
      if (!data) throw { name: "Not Found" };
      await Genre.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: ` ${data.name} success to delete` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MovieController;

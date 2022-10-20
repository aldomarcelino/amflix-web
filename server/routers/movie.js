const express = require("express");
const MovieController = require("../controllers/movie.controller");
const router = express.Router();

router.get("/", MovieController.showAllMovie);
router.post("/", MovieController.addNewMovies);
router.get("/genre", MovieController.showAllGenre);
router.post("/genre", MovieController.addNewGenre);
router.delete("/:id", MovieController.deleteTheMovie);
router.delete("/genre/:id", MovieController.deleteTheGenre);
module.exports = router;

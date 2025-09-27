const express = require('express');
const router = express.Router();
const film1Controller = require('../controllers/film1Controllers');
const fil1Middleware = require('../middleware/film1middleware');

router.get('/', film1Controller.getAllFilms);
router.get('/:id', film1Controller.getFilmById);
router.post('/', fil1Middleware.validateFilmData, film1Controller.createFilm);
router.put('/:id', fil1Middleware.validateFilmData, film1Controller.updateFilm);
router.delete('/:id', film1Controller.deleteFilm);

module.exports = router;
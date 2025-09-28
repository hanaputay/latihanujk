const express = require('express');
const router = express.Router();
const film1Controller = require('../controllers/film1Controller');
const film1Middleware = require('../middleware/film1Middleware');

router.get('/', film1Controller.getAllFilms);
router.get('/:id', film1Controller.getFilmById);
router.post('/', film1Middleware.validateFilmData, film1Controller.createFilm);
router.put('/:id', film1Middleware.validateFilmData, film1Controller.updateFilm);
router.delete('/:id', film1Controller.deleteFilm);

module.exports = router;

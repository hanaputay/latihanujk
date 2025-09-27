const express = require('express');
const router = express.Router();
const film3Controller = require('../controllers/film3Controller');
const film3Middleware = require('../middleware/film3Middleware');

router.get('/', film3Controller.getAllFilms);
router.get('/:id', film3Controller.getFilmById);
router.post('/', film3Middleware.validateFilmData, film3Controller.createFilm);
router.put('/:id', film3Middleware.validateFilmData, film3Controller.updateFilm);
router.delete('/:id', film3Controller.deleteFilm);

module.exports = router;
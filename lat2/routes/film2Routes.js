const express = require('express');
const router = express.Router();
const film2Controller = require('../controllers/film2Controller');
const film2Middleware = require('../middleware/film2Middleware');

router.get('/', film2Controller.getAllFilms);
router.get('/:id', film2Controller.getFilmById);
router.post('/', film2Middleware.validateFilmData, film2Controller.createFilm);
router.put('/:id', film2Middleware.validateFilmData, film2Controller.updateFilm);
router.delete('/:id', film2Controller.deleteFilm);

module.exports = router;
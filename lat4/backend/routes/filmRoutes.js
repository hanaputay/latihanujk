const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');
const filmMiddleware = require('../middleware/filmMiddleware');

router.get('/', filmController.getAllFilms);
router.get('/:id', filmController.getFilmById);
router.post('/', filmMiddleware.validateDataFilm, filmController.createFilm);
router.put('/:id', filmMiddleware.validateDataFilm, filmController.updateFilm);
router.delete('/:id', filmController.deleteFilm);

module.exports = router;
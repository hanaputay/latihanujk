import express from 'express';
import { getAllFilms, getFilmById, createFilm, updateFilm, deleteFilm } from '../controllers/filmController.js';
import { validateFilmData } from '../middleware/filmMiddleware.js';
const router = express.Router();

router.get('/', getAllFilms);
router.get('/:id', getFilmById);
router.post('/', validateFilmData, createFilm);
router.put('/:id', validateFilmData, updateFilm);
router.delete('/:id', deleteFilm);

export default router;
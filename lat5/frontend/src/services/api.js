import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:4002/api/films',
    headers: {
        "Content-Type": 'application/json'
    },
});

export const getAllFilms = () => apiClient.get('/');
export const getFilmById = (id) => apiClient.get(`/${id}`);
export const createFilm = (film) => apiClient.post('/', film);
export const updateFilm = (id, film) => apiClient.put(`/${id}`, film);
export const deleteFilm = (id) => apiClient.delete(`/${id}`);
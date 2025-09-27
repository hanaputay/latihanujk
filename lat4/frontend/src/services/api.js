import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:4001/api/films',
    headers: {
        "Content-Type": 'application/json'
    },
});

export const getAllFilms = () => apiClient.get('/');
export const getFilmById = (id) => apiClient.get(`/${id}`);
export const createFilm = (filmData) => apiClient.post(`/`, filmData);
export const updateFilm = (id, filmData) => apiClient.put(`/${id}`, filmData);
export const deleteFilm = (id) => apiClient.delete(`/${id}`);
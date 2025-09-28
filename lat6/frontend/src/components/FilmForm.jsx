import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';
import { getFilmById, createFilm, updateFilm } from "../services/api";

const FilmForm = () => {
    const [film, setFilm] = useState({
        judul: '',
        sutradara: '',
        genre: '',
        tahun_rilis: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            const fetchFilm = async () => {
                try {
                    const response = await getFilmById(id);
                    setFilm(response.data);
                } catch (error) {
                    setError('Gagal memuat data film');
                    console.error('Error fetching film:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchFilm();
        } else {
            setLoading(false);
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilm({...film, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            if(id) {
                await updateFilm(id, film);
                alert('Film berhasil diperbarui');
            } else {
                await createFilm(film);
                alert('Film berhasil ditambahkan');
            }
            navigate('/');
        } catch (error) {
            setError(error.response?.data?.message || 'Terjadi kesalahan saat menyimpan film');
            console.error('Gagal menyimpan film:', error);
        }
    };

    if(loading) return <div>Loading...</div>;

    return (
        <Form onSubmit={handleSubmit} className="p-4">
            <h2 className="mb-4">{id ? 'Edit Film' : 'Tambah Film'}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm='2'>Judul</Form.Label>
                <Col sm='10'>
                    <Form.Control
                    type="text"
                    name="judul"
                    value={film.judul}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm='2'>Sutradara</Form.Label>
                <Col sm='10'>
                    <Form.Control
                    type="text"
                    name="sutradara"
                    value={film.sutradara}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm='2'>Tahun Rilis</Form.Label>
                <Col sm='10'>
                    <Form.Control
                    type="text"
                    name="tahun_rilis"
                    value={film.tahun_rilis}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm='2'>Genre</Form.Label>
                <Col sm='10'>
                    <Form.Control
                    type="text"
                    name="genre"
                    value={film.genre}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
                {id ? 'Perbarui Film' : 'Tambah Film'}
            </Button>
            <Button variant="secondary" type="submit" onClick={() => navigate('/')} className="ms-2">
                Batal
            </Button>
        </Form>
    )
}

export default FilmForm;
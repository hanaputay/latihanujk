import { useState, useEffect } from "react";
import { Table, Button, Alert, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAllFilms, deleteFilm } from "../services/api";

const HomePage = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchFilms();
    }, []);

    const fetchFilms = async () => {
        try {
            const response = await getAllFilms();
            setFilms(response.data)
        } catch (error) {
            setError('Gagal memuat film, pastikan backend berjalan');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if(confirm('Apakah anda yakin ingin menghapus file ini?')) {
            try {
                await deleteFilm(id);
                alert('Film berhasil dihapus');
                fetchFilms();
            } catch (error) {
                console.error('Gagal menghapus film', error);
                alert('Gagal menghapus film');
            }
        }
    };

    if(loading) return <div className="text-center mt-5">Memuat...</div>;
    if(error) return <Alert variant="danger">{error}</Alert>;

    return (
        <Card className="p-4">
            <h1 className="mb-4">Daftar Film</h1>
            {films.length === 0 ? (
                <Alert variant="info" className="mt-3">Belum ada film dalam daftar</Alert>
            ) : (
                <Table striped bordered hover responsive >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Judul</th>
                            <th>Sutradara</th>
                            <th>Tahun Rilis</th>
                            <th>Genre</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {films.map((film) => (
                            <tr key={film.id}>
                                <td>{film.id}</td>
                                <td>{film.judul}</td>
                                <td>{film.sutradara}</td>
                                <td>{film.tahun_rilis}</td>
                                <td>{film.genre}</td>
                                <td>
                                    <Button variant="warning" onClick={() => navigate(`/edit${film.id}`)} className="me-2">Edit</Button>
                                    <Button variant="danger" onClick={() => handleDelete(film.id)}>Hapus</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <Button as={Link} to="/add" variant="primary" className="mb-3" >
                Tambah Film Baru
            </Button>
        </Card>
    );
};

export default HomePage;
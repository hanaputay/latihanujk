import pool from '../config/db.js';

const getAllFilms = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM film2');
        res.json(rows);
    } catch (error) {
        console.log('Gagal memuat data film:', error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

const getFilmById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM film2 WHERE id = ?', [id]);
        if(rows.length === 0) {
            return res.status(404).json({ message: "Film tidak ditemukan" });
        }
        res.json(rows[0]);
    } catch (error) {
        console.log('Gagal memuat data film:', error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

const createFilm = async (req, res) => {
    const { judul, sutradara, tahun_rilis, genre } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO film2 (judul, sutradara, tahun_rilis, genre) VALUES (?, ?, ?, ?)', [judul, sutradara, tahun_rilis, genre]);
        res.json({ message: 'Film berhasil ditambahkan', id: result.insertId });
    } catch (error) {
        console.log('Gagal memuat data film:', error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

const updateFilm = async (req, res) => {
    const { id } = req.params;
    const { judul, sutradara, tahun_rilis, genre } = req.body;
    try {
        const [result] = await pool.query('UPDATE film2 SET judul = ?, sutradara = ?, tahun_rilis = ?, genre = ? WHERE id = ? ', [judul, sutradara, tahun_rilis, genre, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Film tidak ditemukan" });
        }
        res.json({ message: 'Film berhasil diperbarui' });
    } catch (error) {
        console.log('Gagal memuat data film:', error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

const deleteFilm = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE film2 WHERE id = ?', [id]);
        if(result.affectedRows === 0) {
            return res.status(404).json({ message: "Film tidak ditemukan" });
        }
        res.json({ message: 'Film berhasil dihapus'});
    } catch (error) {
        console.log('Gagal memuat data film:', error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

export { getAllFilms, getFilmById, createFilm, updateFilm, deleteFilm };
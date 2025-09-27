const pool = require('../config/db');

exports.getAllFilms = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM film1');
        res.json(rows);
    } catch (error) {
        console.error('Gagal mendapatkan data film:', error);
        res.status(500).json({ msg: 'Server Error'});
    }
};

exports.getFilmById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM film1 WHERE id = ?', [id]);
        if(rows.length === 0) {
            res.status(401).json({ msg: 'Film tidak ditemukan'});
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Gagal mendapatkan film dengan id', error);
        res.status(500).json({msg: 'Server Error'});
    }
};

exports.createFilm = async (req, res) => {
    const {title, director, release_year, genre} = req.body;
    try {
        const [result] = await pool.query('INSERT INTO film1 (title, director, release_year, genre) VALUES (?, ?, ?, ?)', [title, director, release_year, genre]);
        res.status(201).json({ msg: 'Film berhasil ditambahkan', id: result.insertId});
    } catch (error) {
        console.error('Gagal menambahkan film:', error);
        res.status(500).json({ msg: 'Server Error'});
    }
};

exports.updateFilm = async (req, res) => {
    const { title, director, release_year, genre } = req.body;
    const { id } = req.params;
    try {
        const [result] = await pool.query('UPDATE film1 SET title = ?, director = ?, release_year = ?, genre = ? WHERE id = ?', [title, director, release_year, genre, id]);
        if(result.affectedRows === 0) {
            return res.status(404).json({ msg: 'Film Tidak ditemukan'});
        }
        res.json({ msg: 'Film berhasil diperbarui'});
    } catch (error) {
        console.error('Gagal memperbarui film:', error);
        res.status(500).json({ msg: 'Server Error'});
    }
};

exports.deleteFilm = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM film1 WHERE id = ?', [id]);
        if(result.affectedRows === 0) {
            return res.status(404).json({ msg: 'Film tidak ditemukan'})
        }
        res.json({ msg: 'Film berhasil dihapus'});
    } catch (error) {
        console.error('Gagal menghapus film:', error);
        res.status(500).json({ msg: 'Server Error'});
    }
};
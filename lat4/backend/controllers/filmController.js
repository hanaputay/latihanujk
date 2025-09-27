const pool = require('../config/db');

exports.getAllFilms = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM film2');
    res.json(rows);
  } catch (error) {
    console.error('Gagal mendapatkan data', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

exports.getFilmById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM film2 WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).json({ msg: 'Film tidak dapat ditemukan' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Gagal mendapatkan data', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

exports.createFilm = async (req, res) => {
  const { judul, sutradara, genre, tahun_rilis } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO film2 (judul, sutradara, genre, tahun_rilis) VALUES (?, ?, ?, ?)', [judul, sutradara, genre, tahun_rilis]);
    res.status(201).json({ msg: 'Film berhasil ditambahkan', id: result.insertId });
  } catch (error) {
    console.error('Gagal mendapatkan data', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

exports.updateFilm = async (req, res) => {
  const { id } = req.params;
  const { judul, sutradara, genre, tahun_rilis } = req.body;
  try {
    const [result] = await pool.query('UPDATE film2 SET judul = ?, sutradara = ?, genre = ?, tahun_rilis = ? WHERE id = ?', [judul, sutradara, genre, tahun_rilis, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: 'Film tidak dapat ditemukan' });
    }
    res.json({ msg: 'Film berhasil diperbarui' });
  } catch (error) {
    console.error('Gagal mendapatkan data', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

exports.deleteFilm = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM film2 WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: 'Film tidak ditemukan' });
    }
    res.json({ msg: 'Film berhasil dihapus' });
  } catch (error) {
    console.error('Gagal mendapatkan data', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

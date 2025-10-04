const pool = require('../config/db');

exports.getAllProducts = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM product');
        res.json(rows)
    } catch (error) {
        console.error('Gagal mendapatkan item', error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM product WHERE product_id = ?', [id]);
        if(rows.length === 0) {
            res.status(404).json({ message: 'Product tidak ditemukan'});
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Gagal mendapatkan item by id', error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

exports.createProduct = async (req, res) => {
    const {product_name, category, price, stock, description} = req.body;
    try {
        const [result] = await pool.query('INSERT INTO product (product_name, category, price, stock, description) VALUES (?, ?, ?, ?, ?)', [product_name, category, price, stock, description]);
        res.status(201).json({id: result.insertId, message: 'Data berhasil ditambahkan'})
    } catch (error) {
        console.error('Gagal menambahkan item', error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const {product_name, category, price, stock, description} = req.body;
    try {
        const [result] = await pool.query('UPDATE product SET product_name = ?, category = ?, price = ?, stock = ?, description = ? WHERE product_id = ?', [product_name, category, price, stock,description, id]);
        if(result.affectedRows === 0) {
            res.status(404).json({ message: 'Product tidak ditemukan'});
        }
        res.json({ message: 'Product berhasil diperbarui'})
    } catch (error) {
        console.error('Gagal memperbarui item', error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM product WHERE product_id = ?', [id]);
        if(result.affectedRows === 0) {
            res.status(404).json({ message: 'Product tidak ditemukan'});
        }
        res.json({ message: 'Product berhasil dihapus'})
    } catch (error) {
        console.error('Gagal menghapus item', error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

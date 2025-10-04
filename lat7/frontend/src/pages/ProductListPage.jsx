import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import productService from '../services/productService';
import ProductTable from '../components/ProductTable';
import SearchBar from '../components/SearchBar';

export default function ProductListPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ q: '', category: '' });

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await productService.getAll();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      alert('Gagal mengambil data produk. Cek backend.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async (id) => {
    if (!window.confirm('Yakin ingin menghapus produk ini?')) return;
    try {
      await productService.remove(id);
      setProducts((prev) => prev.filter((p) => String(p.product_id) !== String(id)));
    } catch (err) {
      console.error(err);
      alert('Gagal menghapus produk.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/products/edit/${id}`);
  };

  const handleAdd = () => {
    navigate('/products/add');
  };

  const onClear = () => {
    setFilters({ q: '', category: '' });
  };

  // filter client-side: search by name or category (case-insensitive, partial match)
  const filtered = products.filter((p) => {
    const q = filters.q.trim().toLowerCase();
    const c = filters.category.trim().toLowerCase();
    const name = (p.product_name || '').toLowerCase();
    const cat = (p.category || '').toLowerCase();

    const matchQ = !q || name.includes(q);
    const matchC = !c || cat.includes(c);
    return matchQ && matchC;
  });

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
        <h3>Daftar Produk</h3>
        <button className="btn btn-primary" onClick={handleAdd}>+ Tambah Produk</button>
      </div>

      <SearchBar filters={filters} setFilters={setFilters} onClear={onClear} />

      {loading ? (
        <div className="text-center py-5">Memuat...</div>
      ) : (
        <ProductTable products={filtered} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
}

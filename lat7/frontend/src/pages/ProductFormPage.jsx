import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productService from '../services/productService';
import ProductForm from '../components/ProductForm';

export default function ProductFormPage({ mode = 'add' }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initial, setInitial] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (mode === 'edit' && id) {
      (async () => {
        setLoading(true);
        try {
          const data = await productService.getById(id);
          setInitial(data);
        } catch (err) {
          console.error(err);
          alert('Gagal mengambil data produk. Pastikan ID valid dan backend berjalan.');
          navigate('/', { replace: true });
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [mode, id, navigate]);

  const handleSubmit = async (payload) => {
    setSubmitting(true);
    try {
      if (mode === 'add') {
        await productService.create(payload);
        alert('Produk berhasil ditambahkan');
      } else {
        await productService.update(id, payload);
        alert('Produk berhasil diperbarui');
      }
      navigate('/', { replace: true });
    } catch (err) {
      console.error(err);
      alert('Gagal menyimpan produk.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>{mode === 'add' ? 'Tambah Produk' : 'Edit Produk'}</h3>
        <div>
          <button className="btn btn-outline-secondary me-2" onClick={() => navigate('/')}>Kembali</button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">Memuat data produk...</div>
      ) : (
        <ProductForm initialData={initial} onSubmit={handleSubmit} submitting={submitting} />
      )}
    </div>
  );
}

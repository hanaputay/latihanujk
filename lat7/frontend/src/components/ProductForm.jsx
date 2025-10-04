import React, { useState, useEffect } from 'react';

export default function ProductForm({ initialData = {}, onSubmit, submitting }) {
  const [form, setForm] = useState({
    product_name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        product_name: initialData.product_name ?? '',
        category: initialData.category ?? '',
        price: initialData.price ?? '',
        stock: initialData.stock ?? '',
        description: initialData.description ?? ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!form.product_name || !form.category) {
      alert('Nama produk dan kategori wajib diisi');
      return;
    }

    if (!form.price || !form.stock || form.price < 0 || form.stock < 0) {
      alert('Harga dan Stock harus diisi dan tidak boleh kurang dari 0');
      return;
    }
    // normalize numeric
    const payload = {
      ...form,
      price: form.price === '' ? 0 : Number(form.price),
      stock: form.stock === '' ? 0 : Number(form.stock),
    };
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3">
      <div className="mb-3">
        <label className="form-label">Nama Produk</label>
        <input name="product_name" value={form.product_name} onChange={handleChange} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Kategori</label>
        <input name="category" value={form.category} onChange={handleChange} className="form-control" />
      </div>

      <div className="row g-2 mb-3">
        <div className="col-md-6">
          <label className="form-label">Harga</label>
          <input name="price" value={form.price} onChange={handleChange} type="number" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Stok</label>
          <input name="stock" value={form.stock} onChange={handleChange} type="number" className="form-control" />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Deskripsi</label>
        <textarea name="description" value={form.description} onChange={handleChange} className="form-control" rows="3" />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-success" disabled={submitting}>
          {submitting ? 'Menyimpan...' : 'Simpan'}
        </button>
      </div>
    </form>
  );
}

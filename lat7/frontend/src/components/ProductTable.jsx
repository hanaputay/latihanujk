import React from 'react';

export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="table-responsive shadow-sm rounded bg-white">
      <table className="table table-hover mb-0">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Kategori</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Deskripsi</th>
            <th style={{ minWidth: 140 }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center py-4">Tidak ada data produk</td>
            </tr>
          )}
          {products.map((p, idx) => (
            <tr key={p.product_id ?? idx}>
              <td>{idx + 1}</td>
              <td>{p.product_name}</td>
              <td>{p.category}</td>
              <td>{Number(p.price).toLocaleString()}</td>
              <td>{p.stock}</td>
              <td style={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {p.description}
              </td>
              <td>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-warning" onClick={() => onEdit(p.product_id)}>
                    Edit
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => onDelete(p.product_id)}>
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from 'react';

export default function SearchBar({ filters, setFilters, onClear }) {
  const onChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-3 mt-2">
      <div className="row g-2">
        <div className="col-md-5">
          <input
            name="q"
            value={filters.q}
            onChange={onChange}
            placeholder="Cari berdasarkan nama produk..."
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input
            name="category"
            value={filters.category}
            onChange={onChange}
            placeholder="Cari berdasarkan kategori..."
            className="form-control"
          />
        </div>
        <div className="col-md-3 d-flex gap-2">
          <button className="btn btn-primary flex-grow-1" onClick={() => setFilters({...filters})}>
            Cari
          </button>
          <button className="btn btn-outline-secondary" onClick={onClear}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductListPage from '../pages/ProductListPage';
import ProductFormPage from '../pages/ProductFormPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/products/add" element={<ProductFormPage mode="add" />} />
      <Route path="/products/edit/:id" element={<ProductFormPage mode="edit" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

import React from 'react';
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand text-dark" href="/">Product Manager</a>
        </div>
      </nav>
      <div className="container my-4">
        <AppRouter />
      </div>
    </div>
  );
}

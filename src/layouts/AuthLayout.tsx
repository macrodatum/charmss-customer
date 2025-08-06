import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <header>
        <h1>Charmss - Autenticación</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 Charmss</p>
      </footer>
    </div>
  );
};

export default AuthLayout;

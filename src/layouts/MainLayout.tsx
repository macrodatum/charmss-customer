import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <header>
        <h1>Charmss - Aplicación Principal</h1>
        {/* Aquí iría la navegación principal */}
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

export default MainLayout;

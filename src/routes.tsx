import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importar componentes de página (ejemplos, aún no creados)
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage';

// Importar componentes de layout (ejemplos, aún no creados)
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

// Componente de ejemplo para rutas protegidas (lo crearemos más adelante)
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Aquí iría la lógica de autenticación, por ejemplo, verificar un token
  const isAuthenticated = true; // Placeholder: reemplazar con lógica real (ej. de Zustand store)
  if (!isAuthenticated) {
    // Redirigir al login si no está autenticado
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas de Autenticación con AuthLayout */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<LoginPage />} /> {/* Ruta por defecto para / */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* Agrega más rutas de autenticación aquí */}
        </Route>

        {/* Rutas de la Aplicación Principal con MainLayout y Protección */}
        <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}> {/* La ruta padre es / para que MainLayout sea el layout principal */}
          <Route path="home" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          {/* Agrega más rutas protegidas aquí */}
        </Route>

        {/* Ruta para manejar 404 (Página no encontrada) */}
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
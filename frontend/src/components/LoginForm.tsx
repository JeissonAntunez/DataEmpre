// src/components/LoginForm.tsx
import React from 'react';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Iniciar Sesión</h2>
        <form>
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Ingresar</button>
        </form>
      </div>
      <div className="login-right">
        {/* Puedes poner una imagen, texto o dejarlo vacío */}
      </div>
    </div>
  );
};

export default LoginForm;

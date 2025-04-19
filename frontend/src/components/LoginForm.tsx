// src/components/LoginForm.tsx
import React from 'react';
import './LoginForm.css';



const LoginForm: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Mi portal</h2>
        <form>
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />

          <button id='go' type="submit">Iniciar sesión</button>
            <li>
                <a href="">¿Olvidaste tu contraseña?</a>
            </li>  
          <button  id='creareNew' type="submit">Crear cuenta  nueva</button>
        </form>
      </div>
      <div className="login-right">
        <h3>Hola como estamos</h3>
      </div>
    </div>


  );
};

export default LoginForm;

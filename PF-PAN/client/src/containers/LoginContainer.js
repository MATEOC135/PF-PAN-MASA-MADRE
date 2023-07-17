import React, { useState } from 'react';
import { login, register } from '../services/authService';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogin = async () => {
    if (isRegistering) {
      const isRegistered = await register(email, password);
      if (isRegistered) {
        console.log('Usuario creado exitosamente');
      } else {
        console.log('Error al crear usuario');
      }
    } else {
      const isAuthenticated = await login(email, password);
      if (isAuthenticated) {
        console.log('Inicio de sesión exitoso');
      } else {
        console.log('Inicio de sesión fallido');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Crear cuenta' : 'Iniciar sesión'}</h2>
      <form>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>{isRegistering ? 'Crear cuenta' : 'Iniciar sesión'}</button>
      </form>
      <button onClick={handleToggleRegister}>
        {isRegistering ? 'Iniciar sesión' : 'Crear cuenta'}
      </button>
    </div>
  );
};

export default LoginContainer;

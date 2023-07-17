// Acción para iniciar sesión del usuario
export const login = (userData) => {
    // Aquí puedes realizar lógica adicional, como realizar una llamada a una API para autenticar al usuario
    return {
      type: 'LOGIN',
      payload: userData,
    };
  };
  
  // Acción para cerrar sesión del usuario
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  
  // Acción para registrar un nuevo usuario
  export const register = (userData) => {
    // Aquí puedes realizar lógica adicional, como realizar una llamada a una API para registrar al usuario
    return {
      type: 'REGISTER',
      payload: userData,
    };
  };
  
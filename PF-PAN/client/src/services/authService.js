

// Función para iniciar sesión y guardar el token en una cookie
export const login = async (email, password) => {
    // Lógica para autenticar al usuario utilizando email y contraseña
    // Puedes utilizar llamadas a una API o cualquier otra lógica de autenticación
  
    // Ejemplo de autenticación exitosa
    if (email === 'user@example.com' && password === 'password') {
      // Crear una cookie con el token de autenticación
      document.cookie = `token=my-auth-token; expires=${getCookieExpirationDate()}; path=/`;
  
      return true; // Indica que la autenticación fue exitosa
    }
  
    return false; // Indica que la autenticación falló
  };
  
  // Función para crear un nuevo usuario y luego iniciar sesión automáticamente
  export const register = async (email, password) => {
    // Lógica para crear un nuevo usuario
    // Puedes utilizar llamadas a una API o cualquier otra lógica de creación de usuarios
  
    // Ejemplo de creación exitosa de usuario
    if (email && password) {
      // Aquí puedes realizar las acciones necesarias para crear el usuario, como guardar los datos en una base de datos
      // Después, iniciar sesión automáticamente llamando a la función de inicio de sesión
      return login(email, password);
    }
  
    return false; // Indica que la creación de usuario falló
  };
  
  // Función para cerrar sesión y eliminar la cookie
  export const logout = () => {
    // Eliminar la cookie de autenticación
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };
  
  // Función para verificar si el usuario está autenticado consultando la cookie
  export const isAuthenticated = () => {
    // Obtener todas las cookies
    const cookies = document.cookie.split(';');
  
    // Buscar la cookie de autenticación
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
  
    // Verificar si se encontró la cookie y si contiene un token válido
    if (tokenCookie) {
      const token = tokenCookie.split('=')[1].trim();
      return !!token;
    }
  
    return false; // Indica que el usuario no está autenticado
  };
  
  // Función para obtener la fecha de expiración de la cookie (30 días a partir de la fecha actual)
  const getCookieExpirationDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
  
    return date.toUTCString();
  };
  
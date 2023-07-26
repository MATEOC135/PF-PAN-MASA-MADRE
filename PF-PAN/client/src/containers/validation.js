const regexName = /^[A-Z][A-Za-z0-9 ]*$/;

export const validation = (form) => {
    let errors = {};
  
    if (!form.names) {
      errors.names = "El nombre es obligatorio";
    }
    if (!regexName.test(form.names)) {
      errors.names =
      "El nombre no puede tener caracteres especiales ni tildes y debe comenzar con una letra mayúscula";
    }
    if (form.names.length < 3) {
      errors.names = "El nombre no puede tener menos de 3 caracteres";
    }
    if (form.names.length > 30) {
      errors.names = "El nombre no puede tener más de 30 caracteres";
    }
  
    return errors;
  };
  
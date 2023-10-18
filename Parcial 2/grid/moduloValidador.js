

// validationModule.js

const { checkSchema } = require('express-validator');

const validationSchema = checkSchema({
  'nombre': {
    isLength: {
      options: { min: 5, max: 10 },
      errorMessage: "El nombre debe tener entre 5 y 10 caracteres"
    }
  },
  'apellido': {
    isLength: {
      options: { min: 2, max: 20 },
      errorMessage: "El apellido debe tener entre 2 y 20 caracteres"
    }
  },
  'correo': {
    isEmail: {
      errorMessage: "Error en el campo correo"
    }
  },
  'edad': {
    isNumeric: {
      errorMessage: "La edad debe ser numérica"
    }
  }
});

module.exports = validationSchema;

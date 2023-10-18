const express = require('express');
// const {check,query, validationResult } = require('express-validator')
// const {checkSchema, validationResult } = require('express-validator')

const { validationResult } = require('express-validator');
const validationSchema = require('./moduloValidador');

const app = express();

app.use(express.json());

// app.post('/Alumnos', checkSchema({
//     'nombre':{isLength: {options:{min:5, max:10}}},
//     'apellido': {isLength:{min:2, max:20}},
//     'correo':{isEmail:{errorMessage:"Error en el campo correo"}},
//     "edad": {isNumeric:{errorMessage:"edad debe ser numerico"}},

    
// }),
//     (req, res) => {
//     const result = validationResult(req);
//     if (result.isEmpty()) {
//         console.log(req.body)
//         res.json({mensaje:"Respuesta a peticion"})
//         // return res.send(`Hello, ${req.body}!`);
//     }else {
//         res.json(result)
//     }
// });


app.post('/Alumnos', validationSchema, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  
  res.json({ message: "Registro exitoso" });
});


app.listen(8086,()=>{
    console.log("Servidor express escuchando 8086"); 
})


//documentar
//framework de testeo
const express = require('express');
const {check,query, validationResult } = require('express-validator')
// const {checkSchema, validationResult } = require('express-validator')

const app = express();

app.use(express.json());


app.get('/Alumnos', query('person').notEmpty(), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.query.person}!`);
  }

  res.send({ errors: result.array() });
});


var validar = [ check('edad').isNumeric().withMessage("No es un dato numerico"),
                check('correo').isEmail().withMessage("Error en el correo")]

app.post('/Alumnos', validar,
    (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        console.log(req.body)
        return res.send(`Hello, ${req.body}!`);
    }else {
        res.json(result)
    }
});


// app.post('/Alumnos/2', checkSchema({
//     'nombre':{isLength: {min:5, max:10}},
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


app.listen(8085,()=>{
    console.log("Servidor express escuchando 8085"); 
})


//documentar
//framework de testeo
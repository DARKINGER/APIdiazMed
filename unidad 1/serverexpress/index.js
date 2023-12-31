


// const express = require('express');
// const app = express();

// app.use(express.json())

// app.get("/alumnos/:carrera",(req,resp)=>{
//     console.log(req.params);
//     console.log(req.query);
//     console.log(req.body);
//     resp.send("Servidor Express contestando a peticion GET");
// });

// app.get("/alumnos",(req,resp)=>{
//     resp.send("Servidor Express contestando a peticion GET");
// });

// app.use((req, res, next) => {
//     res.status(404).send("Página no encontrada");
//   });
  
// app.listen(8085,(req,resp)=>{
//     console.log("Servidor express escuchando");
// });



// const express = require('express');
// const app = express();
// app.use(express.json());
// app.get("/alumnos/:carrera", (req, res)=>{
//     console.log(req.params);
//     console.log(req, query);
//     console.log(req, body);
//     res.send("servidor express contestando a peticion get");
// });
// app.post("/alumnos/:carrera", (req, resp)=>{
//     resp.send("servidor express contestando a peticion post");
// });
// app.listen(8085, (req, res)=>{
//     console.log("servidor ecpress escuchando");
// });



const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 

// app.use(express.json());
app.get("/alumnos/:carrera", (req, res)=>{
    // console.log(req.params);
    // console.log(req, query);
    // console.log(req, body);
    // res.send("servidor express contestando a peticion get");
    res.jsonp({respuesta:"contestando"})
});
app.post("/alumnos/:carrera", (req, resp)=>{
    resp.send("servidor express contestando a peticion post");
});
app.listen(8085, (req, res)=>{
    console.log("servidor ecpress escuchando");
});


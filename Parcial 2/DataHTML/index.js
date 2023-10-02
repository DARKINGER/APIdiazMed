
const express = require('express');
var cors = require('cors');
const path = require('path');
const mysql = require('mysql2/promise');

const multer = require('multer');


const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true,}));

// const upload = multer();

const storage = multer.memoryStorage();
const upload = multer();
// const upload = multer({ storage: storage});

app.use(upload.single('archivo'));
app.use(upload.none());


// var accesLogStream = fs.createWriteStream(path.join(__dirname, 'acces.Log'), {flags: 'a'});

// app.use(morgan('combined', {stream: accesLogStream}));
app.use(express.json());




app.post("/usuarios", async (req, res)=> {
    // console.log('uno mas')
    try{
        // console.log('esta entrando')
        // console.log(`se recibio el archivo: ${req.file.originalname}`);
        // console.log(`se recibio formulario: ${JSON.stringify(req.body)}`);
        res.json(req.body);
        console.log(req.body);
    }catch(err){
        // console.log(err);
        res.json({mensaje:err.sqlMessage});
        // res.status(500).json({mensaje:err.sqlMessage});
        // res.json({mensaje:'Error de conexion'});
    }
});


app.post('/usuarios/2', async (req, res) => {
    try {
        // Supongamos que req.body contiene un objeto JSON como respuesta
        const responseData = req.body;

        // Creamos una página HTML simple para mostrar la respuesta JSON centrada
        const htmlResponse = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Respuesta JSON</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }

                .response-container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="response-container">
                <h2>Respuesta JSON:</h2>
                <pre>${JSON.stringify(responseData, null, 2)}</pre>
            </div>
        </body>
        </html>
        `;

        res.send(htmlResponse);
    } catch (err) {
        res.status(500).json({ mensaje: 'Error de conexión' });
    }
});

// app.listen(port, () => {
//     console.log(`Servidor escuchando en el puerto ${port}`);
// });

// app.get("/usuarios/1", async (req, res)=> {
//     try{
//         console.log(`se recibio el archivo: ${req.file.originalname}`);
//         console.log(`se recibio formulario: ${JSON.stringify(req.body)}`);
//         res.json(req.body);
//     }catch(err){
//         // console.log(err);
//         res.json({mensaje:err.sqlMessage});
//         // res.status(500).json({mensaje:err.sqlMessage});
//         // res.json({mensaje:'Error de conexion'});
//     }
// });

//URLSearch
// app.post('/usuarios/urlencoded', async (req, resp) => {
//     try {
//         const nom = req.body.nombre1;
//         const Ncon = req.body.Ncontrol1;
//         const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
//         const [result] = await conn.query(`INSERT INTO hola.alumnos (nombre, Ncontrol) values ("${nom}", ${Ncon});`);

        
//         resp.status(201).json({ mensaje: `Usuario agregado correctamente ` });
//     } catch (err) {
//         resp.status(500).json({ mensaje: 'Error de conexión', tipo: err.message, sql: err.sqlMessage });
//         console.error(err);
//     }
// });


//////////////////////////////////////////////////////////////////


// app.post('/usuarios/multipart', upload.none(), async (req, resp) => {
//     try {
//         const nom = req.body.nombre;
//         const Ncon = req.body.Ncontrol;
//         const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
//         const [result] = await conn.query(`INSERT INTO hola.alumnos (nombre, Ncontrol) values ("${nom}", ${Ncon});`);

//         resp.status(201).json({ mensaje: 'Usuario agregado correctamente' });
//     } catch (err) {
//         resp.status(500).json({ mensaje: 'Error de conexión', tipo: err.message, sql: err.sqlMessage });
//         console.error(err);
//     }
// });


app.post('/usuarios/multipart', upload.none(), async (req, res) => {
    console.log('Está entrando');
  
    try {
      const nombre = req.body.nombre;
      const Ncontrol = req.body.Ncontrol;
  
      console.log(nombre + ' - ' + Ncontrol);
  
      res.send('Recibido');
    } catch (err) {
      res.status(404).json({ estado: 'Página o ruta no encontrada' });
    }
  });


// app.post('/usuarios/multipart', upload.none(),async (req, resp) => {
//     console.log('esta entrando')
//     try {
//         const nom = req.body.nombre;
//         const Ncontrol = req.body.Ncontrol;

//         console.log(nom + Ncontrol)
//         // const archivo = req.file;

//         res.send('Recibido')
//         // console.log(`${nom} - ${Ncontrol}`)
//     } catch (err) {
//         res.status(404).json({estado: "Pagina=Ruta no encontrada"})
//         // console.error(err);
//     }
// });


app.use((req, res)=>{
    res.status(404).json({estado: "Pagina=Ruta no encontrada"})
    // console.log(comprobacio)
});
app.listen(8085,()=>{
    console.log("Servidor express corriendo y escuchando en el puerto 8085");
});



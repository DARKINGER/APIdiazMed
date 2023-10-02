
const express = require('express');
var cors = require('cors');
const path = require('path');
const mysql = require('mysql2/promise');
const multer = require('multer');
// const morgan = require('morgan');
// const fs = require('fs');
// const { Stream } = require('stream');
// const axios = require('axios');

// const folder = path.join(__dirname+'/archivos/');
// const upload = multer({dest:folder});

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
app.post('/usuarios/urlencoded', async (req, resp) => {
    try {
        const nom = req.body.nombre1;
        const Ncon = req.body.Ncontrol1;
        const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
        const [result] = await conn.query(`INSERT INTO hola.alumnos (nombre, Ncontrol) values ("${nom}", ${Ncon});`);

        
        resp.status(201).json({ mensaje: `Usuario agregado correctamente ` });
    } catch (err) {
        resp.status(500).json({ mensaje: 'Error de conexión', tipo: err.message, sql: err.sqlMessage });
        console.error(err);
    }
});


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


app.post('/usuarios/multipart', upload.none(),async (req, resp) => {
    console.log('esta entrando')
    try {
        const nom = req.body.nombre;
        const Ncontrol = req.body.Ncontrol;

        console.log(nom + Ncontrol)
        // const archivo = req.file;

        res.send('Recibido')
        // console.log(`${nom} - ${Ncontrol}`)
    } catch (err) {
        res.status(404).json({estado: "Pagina=Ruta no encontrada"})
        // console.error(err);
    }
});


app.use((req, res)=>{
    res.status(404).json({estado: "Pagina=Ruta no encontrada"})
    // console.log(comprobacio)
});
app.listen(8085,()=>{
    console.log("Servidor express corriendo y escuchando en el puerto 8085");
});



// app.use(express.json());
// app.use(express.urlencoded({extended:true}));


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////



// app.get("/usuarios", async (req, res)=> {
//     try{
//         const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
//         const [rows, fields] = await conn.query('SELECT * FROM hola.alumnos');
//         res.json(rows);
//     }catch(err){
//         // console.log(err);
//         res.status(500).json({mensaje:err.sqlMessage});
//         // res.json({mensaje:'Error de conexion'});
//     }
// });

// app.get("/usuarios/error", async (req, res)=> {
//     try{
//         const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
//         const [rows, fields] = await conn.query('SELECT * FRO hola.alumnos');
//         res.json(rows);
//     }catch(err){
//         // console.log(err);
//         res.status(500).json({mensaje:err.sqlMessage});
//         // res.json({mensaje:'Error de conexion'});
//     }
// });

// app.get("/usuarios/:id", async(req, res)=> {
//     const parametros = req.params.id
//     console.log(parametros);
//     const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
//     const [rows, fields] = await conn.query('SELECT * FROM hola.alumnos WHERE id='+req.params.id);
//     if(rows.length==0){
//         // res.status(404);
//         res.status(404).json({mensaje:'usuario no existe'});
//     }else{
//         res.json(rows);
//     }
// });


// app.delete("/usuarios", async(req, res)=> {

//     console.log(req.query);
//     try{
//     const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
//     const [rows, fields] = await conn.query(`DELETE FROM hola.alumnos WHERE id=+${req.query.id}`);
//     // res.json(rows);
//     res.json({message:"Se ha eliminado el usuario con id: "+ req.query.id})
//     }catch(err){
//         res.status(404).json({mensaje:err.sqlMessage})
//     }
// });


// app.post("/usuarios", async(req, res)=> {
//     try{
//     const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
//     const [rows, fields] = await conn.query(`INSERT INTO hola.alumnos (nombre, Ncontrol) values ("${req.query.nombre}", ${req.query.Ncontrol});`);
//     res.json(rows);
//     }catch(err){
//         res.json({mensaje:err.sqlMessage})
//     }
// });
// // INSERT INTO `hola`.`alumnos` (`nombre`, `Ncontrol`) VALUES ('kio', '8745');

// app.put("/usuarios/upload", async(req, res)=>{
//     try{
//         const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
        
//         // const objetoA = req.json.body;
//         const objetoA = req.body;
//         console.log(req.body);
//         console.log(objetoA);
        
//         let campos = Object.keys(objetoA);
//         let valores = Object.values(objetoA);
//         console.log(campos);
//         // console.log(valores);
        
//         let sentencia = "UPDATE hola.alumnos SET "
//         let sentencia2 = ""
//         let where = "WHERE (id = "

//         let totCampos = 0;
//         let count = 1;
        
//         campos.forEach(campo =>{
//             totCampos += 1
//         })

//         console.log(totCampos);

//         campos.forEach(campo => {
        
//             // console.log(campo)

//             if(count == 1 && campo == 'id'){
//                 where+=objetoA[campo] + ");"
//                 count += 1;
//             }else{

//                 if (campo == "nombre" && count < totCampos)
//                 {
//                     sentencia += campo + ' = "' + objetoA[campo] + '", '
//                     count += 1;
//                 }else if (campo == "nombre" && count < totCampos)
//                 {
//                     sentencia += campo + ' = ' + objetoA[campo]+', '
//                     count += 1;
//                 }else
//                 {
//                     if(campo == "nombre"){
//                         sentencia += campo + ' = "' + objetoA[campo]+'" '+where;
//                     }else{
//                         sentencia += campo + ' = ' + objetoA[campo]+' '+where;
//                     }
//                 }

//             }
        
//         });
//         console.log(sentencia);
//         const [rows, fields] = await conn.query(sentencia);

//         res.json({message:"se han actualizado los datos"});
//         }catch(err){
//             res.json({mensaje:err.sqlMessage})
//         }
// })//UPDATE `hola`.`alumnos` SET `nombre` = 'jesus', `Ncontrol` = '158' WHERE (`id` = '10');
// //UPDATE `hola`.`alumnos` SET `nombre` = 'jesus' WHERE (`id` = '10');



// app.listen(8085, ()=>{
//     console.log("server express escuchando en el puerto 8085");
// });

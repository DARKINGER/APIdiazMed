
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const { Stream } = require('stream');
const app = express();


var accesLogStream = fs.createWriteStream(path.join(__dirname, 'acces.Log'), {flags: 'a'});
app.use(morgan('combined', {stream: accesLogStream}));

app.get("/usuarios", async (req, res)=> {
    try{
        const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
        const [rows, fields] = await conn.query('SELECT * FROM hola.alumnos');
        res.json(rows);
    }catch{
        res.json({mensaje:'Error de conexion'});
    }
});


app.get("/usuarios/:id", async(req, res)=> {
    const parametros = req.params.id
    console.log(parametros);
    const conn = await mysql.createConnection({host:'localhost', user:'admin', password:'Dima.zdla1', database:'hola'});
    const [rows, fields] = await conn.query('SELECT * FROM hola.alumnos WHERE id='+req.params.id);
    if(rows.length==0){
        res.json({mensaje:'usuario no existe'});
    }else{
        res.json(rows);
    }
});

app.listen(8085, ()=>{
    console.log("server express escuchando en el puerto 8085");
});

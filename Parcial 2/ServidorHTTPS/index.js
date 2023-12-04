
const express = require('express');
const https = require('https');
const app = express();
const fs = require('fs');
const path = require('path');

// const app = express();
// app.use(cors());
// app.use(express.urlencoded({extended:true,}));

const optiones = {
    key:fs.readFileSync(path.join(__dirname, "ssl/key.pem")),
    cert:fs.readFileSync(path.join(__dirname, "ssl/cert.pem"))
}

app.get("/alumnos", (req, res)=>{
    res.send("Servidor expres seguro contestando a peticion get");
})

https.createServer(optiones, app).listen(8085, function(){
    console.log("servodor express corriendo e puerto 8085");
})
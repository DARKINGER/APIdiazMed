
const validation = require('./middoeware/JoiValidator');
const {registroSchema} = require('./schemas/registro')

const express = require('express');
// const jpi     = require('joi')

const app  = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.post("/cliente", validation(registroSchema), (req, res)=>{
    const {usuario, pass, id} = req.body;
    res.send(`usuario: ${usuario}, pass: ${pass}, id:${id}`);
});

app.listen(8085,()=>{
    console.log("servidor escuchando en el puerto 8085");
})




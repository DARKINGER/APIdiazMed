
import express from 'express'
import * as dotenv from 'dotenv'
import auth from './ex.js'
import authRouter from './ex.js'
// import jwt from 'jsonwebtoken'
// const express = require('express')
// const dotenv=require('dotenv')
// const auth = require('./ex.js')

// import puerto from './env'

dotenv.config({path:"E:/API'S/Parcial 2/Pipe/.env"})
const app = express()
const PORT = process.env.port;
// const PORT = puerto.PORT;

app.use(express.json())
    .use('/',authRouter)

    .get('/no', (req, res)=>{
        res.status(200).json({message: 'no puedes acceder, eres invitado'})
    })
    .listen(PORT, ()=>{
        console.log(`Servidor corriendo en ${PORT}`);
    })



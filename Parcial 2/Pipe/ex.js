
// const express=require('express')
// const authRouter = express.Router()
// const dotenv = require('dotenv')
// const jwt = require('jsonwebtoken')
import { Router } from 'express'
import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config({path:"E:/API'S/Parcial 2/Pipe/.env"})

const authRoute = Router()
const SECRET_KEY = process.env.SECRET_KEY

authRoute
    .get('/', (req, res)=>{
        res.json({message: 'Ruta desprotegida'})
    })
    .post('/login', async (req, res) => {
        const{user, pass}= req.body;
        if (user == 'admin' && pass == 'admin'){
            return res.status(200).json({token:jwt.sign({user:"admin"},SECRET_KEY)})
        }
    })
    .use('/auth',verifyToken)


    // .post('/log', (req, res)=>{
    //     try{
    //         const{user, pass} = req.body
    //         console.log(`User: ${user} \n In loggin.`)
    //         if(use == 'admin' && pass == 'admin'){
    //             return res.status(201).json({token:jwt.sign({user:'admin'}, SECRET_KEY)
    //         })
    //         }
    //     }catch(err){
    //         return res.json({console:err})
    //     }
    // })
    .get('/auth/log', async(req, res)=>{
        return res.status(200).json({message: 'Bienvenido a los datos privados'})
    })

    async function verifyToken(req, res, next){
        if(!req.headers.authorization){
            res.status(401).send('No estas enviando el token')
        }

        console.log(req.headers.authorization)
        
        const token = req.headers.authorization.split(' ')[1]
        console.log(token)

        try{
            jwt.verify(token,SECRET_KEY, (err)=>{
                if(err) return res.json({err:'token invalido'}); //accion rapida del if
                
                next()
            })
        }catch(err){
            // res.json({err: err})
            console.log(err)
        }
    }

export default authRoute;
// module.export.authRoute=authRoute;
const express = require('express' ) ;
const jsonwebtoken = require('jsonwebtoken') ;

let app=express();
app.use(express .json( ) ) ;

app.post('/login',function(req, res,next){
    var token = jsonwebtoken.sign(req.body,'claveSecreta');
    // console.Log(token);
    res.json({token});
});


app.get('/sistema', verifycarToken,function(req, res){
    res.json({mensaje:"acceso concedido a ruta sistema"})
})


app.listen(8085,function(){
    console.log('servidor escuchando en puerto 8085')
})

function verifycarToken(req, res, next){
    console.log(req.headers.authorization)
    let token = req.headers.authorization.substring(7,req.headers.authorization.length);
    jsonwebtoken.verify(token, 'claveSecreta',function(err, decoded){
        if(err) res.json({Error:"acceso no concedido a ruta del sistema"});
        else next();
    })
}


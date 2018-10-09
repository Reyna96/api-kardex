var express =  require('express');
var jwt = require('jsonwebtoken');
var puerto = process.env.PORT || 3000;

var app = express();
app.use(express.json)();
app.get('/calificaciones', function(req,res){
    res.json({
        mensaje: 'Bienvenido al API del kardex'
    });
});

app.post('/login', function(req, res){
    var token = jwt.sign({
        usuario:'alumno'
    }, 'clavesupersecreta', {expireIn: '60s'});
    console.log('Servidor corriendo en el puerto' + token);
    res.json({
        elToken: token 
    });
});
app.listen(puesrto, function(){
    console.log('Servidor corriendo en el puerto' + puerto)
});

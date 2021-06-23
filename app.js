const express = require('express');
const app = express();

const path = require ('path');

//app.use(express.static('public'));

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

/*app.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto 3000');
});*/

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor corriendo en puerto 3000');
});


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

const registerPath = path.resolve(__dirname, "./views/register.html");


app.get('/registro', (req,res) => res.sendFile(registerPath));

const loginPath = path.resolve(__dirname, "./views/login.html");


app.get('/ingresar', (req,res) => res.sendFile(loginPath));
// const reload = require('reload');
const express = require("express"); // Importando Express
const app = express(); // Iniciando Express

app.get('/', function(req, resp){
    resp.send("<h1>Seja bem vindo ao meu portal</h1> <p>Visite tambem o <a href='/blog'>meu blog</a>");
});

app.get('/blog', (req, resp) => {
    resp.send("<h1>Bem vindo ao meu blog</h1>");
});

app.get('/canal/youtube', (req, resp) => {
    let canal = req.query["canal"];
    
    if(canal){
        resp.send("<h1>Nome do canal: "+ canal + " </h1>");

    }else{

        resp.send("<h1>Bem vindo ao meu canal do YouTube</h1>");
    }
});

app.get('/ola/:nome/:empresa?', (req, resp) => {

    // resp.send("<h1>Oi</h1>");
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    if(empresa)
    {
        resp.send("<h1>" + nome + " da empresa " + empresa);
    }else{
        resp.send("<h1>Ola " + nome + "!</h1>");
    }

});

app.listen(8181, function(erro){
    if(erro){
        console.log("Erro ao executar aplicação");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
});

const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const validator = require('validator');

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(cookieParser("ajaksjakjsk"));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(flash());

app.get("/", (req,res) => {
    
    // let {emailError,nomeError,pontosError} = req.flash;
    
    /*
    let emailError  = (!req.flash('emailError')) ? "" : req.flash('emailError');
    let nomeError   = (!req.flash('nomeError')) ? "" : req.flash('nomeError');
    let pontosError = (!req.flash('pontosError')) ? "" : req.flash('pontosError');

    */

    let emailError  = req.flash('emailError');
    let nomeError   = req.flash('nomeError');
    let pontosError = req.flash('pontosError');


    res.render("index",{emailError,nomeError,pontosError,email: req.flash('email'), nome: req.flash('nome'), pontos: req.flash('pontos')});
});

app.post("/form", (req,res) => {
    
    let {email,nome,pontos} = req.body;
    let emailError,nomeError,pontosError;
    
    // if(email == undefined || email == ""){
    if(!email){
        emailError = "O campo EMAIL não pode ser vazio";
    }else if(validator.isEmail(email) == false)
        {
            emailError = "EMAIL inválido!";
        }

    if(!nome){
        nomeError = "O campo NOME não pode ser vazio";
    }
    
    if(!pontos || pontos < 5){
        
        pontosError = "O campo PONTOS não pode ser vazio";
    }

    if(emailError != undefined || nomeError != undefined || pontosError != undefined)
    {
        // res.send(`Erro no envio : ${emailError}, ${nomeError}, ${pontosError}`);
        req.flash("emailError",emailError);
        req.flash("nomeError",nomeError);
        req.flash("pontosError",pontosError);

        req.flash("email",email);
        req.flash("nome",nome);
        req.flash("pontos",pontos);

        res.redirect("/");

    }else{

        res.send("Funcionou!");
    }
    // res.send(email);

});


app.listen('8080', (req,res) => {
    console.log("Servidor em execução");
})
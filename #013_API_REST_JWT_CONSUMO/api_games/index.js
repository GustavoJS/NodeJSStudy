const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const gameController = require("./games/GamesController");

const cors = require("cors");

//Para consumo externo da API via local
app.use(cors());

connection.authenticate()
.then(() => {
    console.log("Conexão relizada com sucesso!");
})
.catch(erro => {
    console.log(erro);
});



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use("/", gameController);



app.listen("8484", () => {
    console.log("Servidor executando...");
});

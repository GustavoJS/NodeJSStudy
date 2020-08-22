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



app.listen("8282", () => {
    console.log("Servidor executando...");
});



/* 

var listGamesDB = {
    games: [
        {
            id: 23,
            title: "God of War 3",
            year: "2013",
            platform: "PlayStation 3",
            price: 30.0
        },

        {
            id: 57,
            title: "Mass Effects",
            year: "2015",
            platform: "Xbox One",
            price: 78.9
        },
        
        {
            id: 16,
            title: "The last of us - Part 2",
            year: "2020",
            platform: "PlayStation 4",
            price: 149.9
        },
        
        {
            id: 60,
            title: "Read dead Redemption 2 ",
            year: "2018",
            platform: "Xbox One",
            price: 137.27
        },        

        {
            id: 250,
            title: "GTA V ",
            year: "2013",
            platform: "PlayStatation 3",
            price: 25.40
        },
    ]
};

app.get("/", (req, res) => {
    res.redirect("/games");
});


router.get("/games", (req, res) => {
    if(!listGamesDB)
    {
        // res.statusCode = 404;
        res.sendStatus(404);
    }
    res.statusCode = 200;
    res.json(listGamesDB.games);

});


router.get("/game/:id", (req, res) => {

    if(!isNaN(req.params.id)){
        let id =  parseInt(req.params.id);
        let game = listGamesDB.games.find(g => g.id == id)
        
        if(game != undefined)
        {
            res.statusCode = 200;
            res.json(game);
            
        }else{

            res.sendStatus(404);
        }
    }else{
        res.sendStatus(400);
        // res.send("É necessário informar um Id numérico");
    }
});

//Cadastrar um Jogo
router.post("/game", (req, res) => {
    
    // let data = {
    //     id: 255,
    //     title: "Battlefield V ",
    //     year: "2019",
    //     platform: "PlayStatation 4",
    //     price: 125
    // }

    // listGamesDB.push(...data);


   let {title,year,platform,price} = req.body;

   listGamesDB.games.push({
        id : Math.floor(Math.random() * (400 - 10)) + 10,
        title,
        year,
        platform,
        price
    });

    res.sendStatus(200);
});

router.delete("/game/:id", (req, res) => {

    if(!isNaN(req.params.id)){
        let id =  parseInt(req.params.id);
        let game = listGamesDB.games.findIndex(g => g.id == id);
        
        if(game >= 0)
        {
            
            listGamesDB.games.splice(game, 1);
            res.sendStatus(200);
            
        }else{

            res.sendStatus(404);
        }
    }else{
        res.sendStatus(400);
        // res.send("É necessário informar um Id numérico");
    }


});


// Atualizar dados
router.put("/game/:id", (req, res) => {

    if(!isNaN(req.params.id)){
        console.log("ID disponível");
        let id = req.params.id;
        
        let game = listGamesDB.games.find(g => g.id == id);
        if(game != undefined)
        {
            var {title,year,platform,price} = req.body;

            if(title != undefined)
            {
                game.title = title;
            }

            if(year != undefined)
            {
                game.year = year;
            }

            if(platform != undefined)
            {
                game.platform = platform;
            }

            if(price != undefined)
            {
                game.price = price;
            }            

            res.sendStatus(200);

        }else{
            res.sendStatus(404);
        }
    }else{
        res.sendStatus(400);
    }

});


app.listen("8080", () => {
    console.log("Servidor executando...");
});

*/


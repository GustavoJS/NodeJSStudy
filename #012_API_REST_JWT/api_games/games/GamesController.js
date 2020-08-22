const express = require("express");
const Games = require("./Games");

const jwt = require("jsonwebtoken");

const router = express.Router();

const JWTSecret = "@#$3r@#e2T$t#%Y¨$y$3R3$t#T%&$&$6#t#¨&$";

let listGamesDB = {

    users: [
        {
            id: 1,
            name: "Victor Lima",
            email: "victordevtb@udemy.com",
            password: "victor123"
        },
        {
            id: 2,
            name: "Guilherme Santiago",
            email: "gui_sant@udemy.com",
            password: "guil123"
        }
    ]
};

// Middleware para autenticação
function auth(req, res, next) {
    const authToken = req.headers['authorization'];
    
    if(authToken != undefined)
    {
        let bearerToken = authToken.split(" ");
        token =  bearerToken[1];
        
        jwt.verify(token, JWTSecret, (err, data) => {
            if(err){
                res.status(401);
                res.json("Token inválido");
            }else{
                // console.log(data);
                
                // Criando variáveis que estão enviados para a rota que carrega esta Middleware
                req.token = token;
                req.empresa = "Silvstate inc.";
                req.loggedUser = {id: data.id,email: data.email};

                next();
            }
        });

    }else{
        res.status(401);
        res.json({err: "Token inválido!"});
    }
    
    // console.log(authToken);

}

router.get("/games",auth, (req, res) => {
    
    console.log("Acessou!");

    Games.findAll().then((games) => {
        
        // res.json(games);
        res.json({empresa: req.empresa,user: req.loggedUser, games:games});
    }).catch( _ => {

        res.sendStatus(400);
    });
});

router.get("/game/:id",auth,(req, res) => {
    if(!isNaN(req.params.id)){
        
        let id = parseInt(req.params.id);
        /*Games.findOne({
            where: {
                id:id
            }
        })*/
        //Ou
        Games.findByPk(id).then(game => {
            // res.statusCode = 200;
            res.status(200);

            if(game)
            {
                res.json(game);
            }else{
                res.sendStatus(404);
            }

        }).catch(erro => {
            res.sendStatus(404);
        });

    }else {

        res.sendStatus(400);
    }
});

//Cadastrar um Jogo
router.post("/game",auth,(req, res) => {
    
   let {title, year, platform, price} = req.body;

   Games.create({
        title: title,
        year: year,
        platform: platform,
        price: price
   }).then(gameList => {

        // res.statusCode = 200;
        
        res.sendStatus(200)
   }).catch( _ => {
        res.sendStatus(400);
   });
    
  
});

router.delete("/game/:id", auth,(req, res) => {

    if(!isNaN(req.params.id))
    {
        let id = parseInt(req.params.id);
        Games.destroy({
            where:{
                id:id
            }
        }).then(_ => {
            res.sendStatus(200);
            
        }).catch(error => {

            // res.statusCode = 404;
            res.status(404);
            res.send(error);
        });
    }else{
        res.sendStatus(400);
    }

});


// Atualizar dados
router.put("/game/:id",auth,(req, res) => {

    if(!isNaN(req.params.id)){

        let id = parseInt(req.params.id);

        let {title, year, platform, price} = req.body;
        
        Games.update({
            title: title,
            year: year,
            platform: platform,
            price: price
        },
        {
            where: {
                id: id
        }}).then(_ => {

            res.sendStatus(200);

        }).catch(erro => {

            console.log(erro);
            res.sendStatus(404); 

        });

    }else{
        res.sendStatus(400);
    }

   
});


router.post("/auth",(req,res) => {
    
    let {email, password} = req.body;
    
    if(email != undefined)
    {
        let user = listGamesDB.users.find(u => u.email == email);
        
        if(user != undefined){

            //Autenticação
            if(user.password == password){

                jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn:'48h'}, (err,token) => {
                    if(err){

                        res.status(400);
                        res.json({err: "Falha interna"});
                    
                    }else{
                        res.status(200);
                        res.json({token: token});
                    }
                });

            }else{
                res.status(401)

                res.json({err: "Credenciais inválida!"});
            }
        }else{
            res.status(404);
            res.json({err: "O e-mail enviado não existe na base dados"});
        
        }
    }else{
        res.status(400);
        res.json({err: 'O e-mail é inválido'});
    }
})

module.exports = router;

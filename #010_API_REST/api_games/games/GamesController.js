const express = require("express");
const Games = require("./Games");

const router = express.Router();

router.get("/games", (req, res) => {
    
    console.log("Acessou!");

    Games.findAll().then((games) => {
        
        res.json(games);
    }).catch( _ => {
        res.sendStatus(400);
    });


});


router.get("/game/:id", (req, res) => {
    if(!isNaN(req.params.id)){
        
        let id = parseInt(req.params.id);
        /*Games.findOne({
            where: {
                id:id
            }
        })*/
        //Ou
        Games.findByPk(id).then(game => {
            res.statusCode = 200;

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
router.post("/game", (req, res) => {
    
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

router.delete("/game/:id", (req, res) => {

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

            res.statusCode = 404;
            res.send(error);
        });
    }else{
        res.sendStatus(400);
    }

});


// Atualizar dados
router.put("/game/:id", (req, res) => {

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

module.exports = router;

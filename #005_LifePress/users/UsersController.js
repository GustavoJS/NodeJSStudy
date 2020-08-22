const express = require("express");
const router = express.Router();
const User = require("./User");
const bcrypt = require("bcryptjs");
const adminAuth = require("../middlewares/adminAuth");

router.get("/login", (req, resp) => {
    resp.render("admin/users/login");
});

router.post("/authenticate", (req,resp) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
        where: {
            email: email
        }
    }).then( user => {
        if(user != undefined){
            
            var correct = bcrypt.compareSync(password, user.password);
            if(correct){
                
                // Cria sessão do usuário 
                req.session.user = {
                    id: user.id,
                    email: user.email
                }

                //resp.json(req.session.user);
                resp.redirect("/admin/articles");

            }else{

                resp.redirect("/login");
            }
        }else{
            resp.redirect("/login");
        }
    })
});

router.get("/logout", (req, resp) => {
    req.session.user = undefined;
    resp.redirect("/");
});

//Lista de usuários
router.get("/admin/users", adminAuth, (req, resp) => {
    // resp.send("Listagem de usuários");

    User.findAll().then(users => {
        resp.render("admin/users/index", {users: users});
    });
});


router.get("/admin/users/create", (req, resp) => {
    // resp.send("Criação de usuário")
    resp.render("admin/users/create");
});

router.post("/admin/users/save", (req,resp) => {
    let email = req.body.email;
    let password = req.body.password;
    
    User.findOne({where: {email:email}}).then( user => {
        if(user == undefined)
        {
            let salt = bcrypt.genSaltSync(15);
            let hash = bcrypt.hashSync(password, salt);
        
            // resp.json({email, hash});
            User.create({
                email: email,
                password: hash,
            }).then( _ => {
                    resp.redirect("/admin/users");
            }).catch(err => {
                resp.redirect("/");
            });


        }else{
            resp.redirect("/admin/users/create");
        }
    })


    

});

module.exports = router;


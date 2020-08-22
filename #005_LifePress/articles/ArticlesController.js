const express = require("express");
const router = express.Router();
const Article = require("./Article");
const Category = require("../categories/Category");
const Slugify = require("slugify"); // Utilizado para converter o título para o formato apropriado na URL
const adminAuth = require("../middlewares/adminAuth"); // Autenticação do usuário

const { render } = require("ejs");
const { default: slugify } = require("slugify");

router.get("/admin/articles", adminAuth , (req, resp) => {
    Article.findAll({
        include: [{model: Category}] // Realizando um Join entre a tabela Category e Article
    }).then((articles) => {
        resp.render("admin/articles/index", {articles: articles});
    });
    

});

router.get("/admin/articles/new", adminAuth , (req, resp) => {
    Category.findAll().then( categories =>{

        resp.render("admin/articles/new", {categories: categories});
    });
    
    
});

router.post("/articles/save", adminAuth ,(req, resp) => {
    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.category;
    
    Article.create({
        title: title,
        slug: Slugify(title),
        body: body,
        categoryId: category,
    }).then( _ => {
        resp.redirect("/admin/articles");
    });
});

router.get("/admin/articles/edit/:id", adminAuth, (req, resp) => {
    let id = req.params.id;

        Article.findByPk(id)
            .then( article => {
                if(article != undefined)
                {
                    Category.findAll().then( categories => {

                        resp.render("admin/articles/edit", {article: article, categories: categories})
                    })
                }else{
                    resp.redirect('/admin/articles');

                }
            })
            .catch(erro => {
                resp.redirect('/admin/articles');
            });

});

router.post("/articles/update", adminAuth, (req, resp) => {
    let id = req.body.id;
    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.category;

    Article.update({
        title: title,
        slug: Slugify(title),
        body: body,
        categoryId: category,
    },
    {
        where: {
            id: id
        }
    }).then(_ => {
        resp.redirect("/admin/articles");

    }).catch( (erro) => {
        
        console.log("Mensagem: " + erro);

        resp.redirect("/admin/articles/edit/" + id);
    });
});

router.post("/articles/delete", adminAuth, (req,resp) => {
    let id = req.body.id;
    if(id != undefined){
        
        if(!isNaN(id)){
            
            // Deletar Categoria
            Article.destroy({
                where : {
                    id: id,
                }
            }).then(() =>{
                
                resp.redirect("/admin/articles");

            });


        }else{ // Não form um número
            
            resp.redirect("/admin/articles");
        }
    }else{ //NULL
        
        resp.redirect("/admin/articles");
    }
});


router.get("/articles/page/:num", (req, resp) => {
    var page = req.params.num;
    var offset = 0;

    Article.findAndCountAll({
        limit: 2,
        offset: offset,
        
    }).then(articles => {
        
        resp.json(articles);
    }).catch(err => {
        console.log("Mensagem: "+err);
    });
});


module.exports = router;
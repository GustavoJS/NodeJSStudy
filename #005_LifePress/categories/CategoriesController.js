const express = require('express');
const router = express.Router();
const Category = require("./Category");
const Slugify = require("slugify");
const adminAuth = require("../middlewares/adminAuth");

router.get("/admin/categories/new", adminAuth,(req, resp) => {
    resp.render("admin/categories/new");
});

router.post("/categories/save", adminAuth,(req, resp) => {
    let title = req.body.title;
    if(title != undefined)
    {
        Category.create({
            title: title,
            slug: Slugify(title),
        
        }).then(() => {
            
            resp.redirect("/admin/categories");

        });

    }else{
        resp.redirect("/admin/categories/new");
    }
});

router.get("/admin/categories", adminAuth,(req, resp) => {
    Category.findAll().then((categories) => {
        resp.render("admin/categories/index", {categories: categories});
    });
});


router.post("/categories/delete", adminAuth,(req,resp) => {
    let id = req.body.id;
    if(id != undefined){
        
        if(!isNaN(id)){
            
            // Deletar Categoria
            Category.destroy({
                where : {
                    id: id,
                }
            }).then(() =>{
                
                resp.redirect("/admin/categories");

            });


        }else{ // Não form um número
            
            resp.redirect("/admin/categories");
        }
    }else{ //NULL
        
        resp.redirect("/admin/categories");
    }
});


router.get("/admin/category/edit/:id", adminAuth,(req, resp) => {
    let id = req.params.id;
    if(isNaN(id)){
        resp.redirect("/admin/categories");
    }
    Category.findByPk(id).then(category => {
        if(category != undefined){
            
            resp.render("admin/categories/edit", {category : category});


        }else{
            resp.redirect("/admin/categories");
        }
    }).catch(erro => {
        resp.redirect("/admin/categories");
    });
});


router.post("/categories/update", adminAuth,(req, resp) => {
    let id = req.body.id;
    let title = req.body.title;
    
    Category.update({
         title: title,
         slug: Slugify(title),
    }, 
    {
        where:{
            id: id,
            // [title.ne]: title
        }
    }).then(() => {
        // resp.redirect("/admin/categories");
        resp.redirect("/admin/categories");
    }).catch(_ => {
        resp.redirect("/admin/category/edit/"+ id);

    });
});

module.exports = router;
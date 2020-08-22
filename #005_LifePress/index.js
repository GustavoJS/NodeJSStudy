const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("./database/database");
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const userController = require("./users/UsersController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");
const User = require("./users/User");

// View engine
app.set('view engine', 'ejs');

//Configurar sessão
app.use(session({
    secret: "jkZ%**j2kle@#E2k3lklç445ZssW)(2ç##e1",
    cookie: { maxAge: 7200000 }

}));


// Static files
app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

// Database
connection
    .authenticate()
    .then(()=> {
        console.log("Conexão realizada com sucesso!");
    }).catch((error) => {
        console.log(error);
    });

// Utilizando o conceito de Rotas
app.use("/", categoriesController);
app.use("/", articlesController);
app.use("/", userController);


//Testando Sessões 
/*
app.get("/session", (req, resp) =>{
    req.session.treinamento = "Formação NodeJs";
    req.session.ano = 2020;
    req.session.email = "joao@gmail.com";
    req.session.user = {
        user: 'joao',
        email: 'email@gmail.com',
        id: 10
    };

    resp.send("Sessão gerada!");
});

app.get("/sessionleitura", (req, resp) => {
    
    resp.json({
        treinamento: req.session.treinamento,
        ano: req.session.ano,
        email: req.session.email,
        user: req.session.user
    });
    
    
});
*/

app.get("/", (req, resp) => {
    // resp.send("Bem vindo ao meu Website!");
    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 5,
    }).then(articles => {

        Category.findAll().then(categories => {

            resp.render("index", {articles : articles, categories: categories});
        })
    })
});

app.get("/:slug", (req, resp) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug : slug
        }
    }).then(article => {
        if(article != undefined)
        {
            resp.render("article", {article: article});
        }else{
            resp.redirect("/");
        }
    }).catch(erro => {
        resp.redirect("/");
    });
});

app.get("/category/:slug", (req, resp) => {
    var slug = req.params.slug;

    console.log("Resultado : " + slug);
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then( category => {
        if(category != undefined){
            Category.findAll().then(categories => {
                resp.render("index",{articles: category.articles,categories: categories});
            });
        }else{
            resp.redirect("/");
        }
    }).catch( err => {

        console.log("Mensagem do Erro: " + err);
        resp.redirect("/");
    })
});


app.listen("8181", () => {
    console.log("Servidor executando...");
});
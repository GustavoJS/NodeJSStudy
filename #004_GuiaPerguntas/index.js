const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const format = require("date-format");
const connection = require("./database/database");
const PerguntaModel = require("./database/Pergunta");
const RespostaModel = require("./database/Resposta");

//Testando conexão
connection.authenticate()
.then(() => {
    console.log("Banco de dados conectado com sucesso")
})
.catch((msgErro) => {
    console.log(msgErro);
});

//Informa para o Express utilizar EJS como View Engine
app.set('view engine', 'ejs');

app.use(express.static('public')); // Pasta publis estará todos os arquivos estáticos como Css, imagens etc...

//bodyParser
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//Rotas
app.get("/", (req, resp) => {
    PerguntaModel.findAll({
        raw: true,
        order: [
            ['id','desc'] // desc : ordem descrescente | asc: ordem crescente
        ]
    }).then( perguntas =>{
        
        // console.log(perguntas);
        resp.render("index", {
            perguntas:perguntas,
            // dataPostagem: format.asString('dd/MM/yyyy - às hh:mm', perguntas.createdAt)
        });
    });
    
});

app.get("/perfil/:nome?/:lang?", (req, resp) => {

    // resp.send("<h1>Iniciando um novo projeto</h1>");
    // resp.render("principal/perfil");
    
    // let nome = "Pedro Alvares";
    // let lang = "PHP";
    let nome = (req.params.nome) ? req.params.nome : "Pedro Alvares";
    let lang = (req.params.lang) ? req.params.lang : "JAVA";
    let inscritos = 8000;
    let mensagemErro = false;

    let listaProfessores = [
        {nome : "Carlos Alberto" , lang: "JavaScript", inscritos: 12600, status:true},
        {nome : "Vanessa de Souza" , lang: "UX", inscritos: 12600, status:false},
        {nome : "Fernando Barbosa" , lang: "Flutter", inscritos: 8200, status:true},
        {nome : "Marco Aurelio" , lang: "Python", inscritos: 13000, status:false}
    ];
    
    resp.render("principal/perfil", {
        nome:nome,
        lang:lang,
        inscritos: inscritos,
        empresa: "Software Tech Crazy",
        status:true,
        msgErro: mensagemErro,
        listaProfessores: listaProfessores
    }
    );
});

app.get("/perguntar", (req, resp) =>{
    resp.render("perguntar");
});

app.post("/salvarpergunta", function(req, resp){
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    // resp.send("Dados do formulário recebido! <br />Titulo: "+ titulo + " <br />Pergunta:  " + descricao + "");
    // resp.send(pergunta);

    PerguntaModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        resp.redirect("/");
    });
});

app.get("/pergunta/:id", (req, resp) => {
    var id = req.params.id;
    PerguntaModel.findOne({
        where: {id : id}
    }).then(pergunta => {
        if(pergunta != undefined){
            
            RespostaModel.findAll({
                where: {idPergunta: pergunta.id},
                order:[ 
                    ["id","DESC"]
                ]

            }).then(respostas => {

                resp.render("pergunta", {
                    pergunta : pergunta,
                    respostas: respostas
                });
            });

            // resp.render("pergunta", { pergunta:pergunta });
        }else{
            resp.redirect("/");
        }
    });
});

app.post("/responder", (req, resp) => {
    let corpo = req.body.corpo;
    let idPergunta = req.body.idPergunta;

    RespostaModel.create({
        corpo: corpo,
        idPergunta: idPergunta
    }).then(() => {
        resp.redirect("/pergunta/" + idPergunta);
    });

});

app.listen(8181, ()=>{
    console.log("Aplicação executando");

});

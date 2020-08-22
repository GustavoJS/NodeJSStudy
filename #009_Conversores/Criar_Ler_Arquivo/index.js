const fs = require("fs");

// const json = require("json");

/*

// Ler arquivo txt

fs.readFile("./ArquivoTeste.txt",{encoding: 'utf-8'}, (erro, data) => {
    if(!erro)
    {
        console.log(data);
    }else{
        console.log("Ocorreu um erro = " + erro);
    }
});
*/

/*
//Criar arquivo txt e ler 

let fileName=  "novoArquivo.txt";
fs.writeFile("./"  + fileName, "!@#)!@*)@*@#*@ Escrevendo em um novo arquivo... !@#)!@*)@*@#*@", (err) => {
    if(err)
    {
        console.log("Ocorreu um erro");
    }else{
        fs.readFile("./"+fileName, {encoding: 'utf-8'}, (erro, data) => {
            if(!erro)
            {
                console.log(data);

            }
        });
    }
});
*/

// Leitura e edição de JSON
fs.readFile("./usuarios.json",{encoding: 'utf-8'}, (erro, data) => {
    if(erro){
        console.log("Mensagem do erro: " + erro);
    }else{
        
        // JSON.parse(data) - função para converter texto para JSON
        let conteudo = JSON.parse(data);
        /*
        conteudo.forEach(usuario => {
            console.log(usuario);
        });
        */

/*
        conteudo.nome = "Renato";
        conteudo.curso = "Introdução em C#";
        conteudo.categoria = ".NET";
        conteudo.genero = ["tecnologia","Microsoft","linguagem de programação","desenvolvimento web","desenvolvimento desktop", "backend"];
*/
        // Adicionadno uma nova linha de registor para o objeto JAvascript
        conteudo.push(
            {
            "nome" : "Renato",
            "curso" : "Introdução em C#",
            "categoria" : ".NET",
            "genero" : ["tecnologia","Microsoft","linguagem de programação","desenvolvimento web","desenvolvimento desktop", "backend"],
            }
        );

        // console.log(conteudo);
       conteudo.forEach( value => {


            console.log(`
           ----------------------------- 
           > nome: ${value.nome}
           > curso: ${value.curso}
           > categoria: ${value.categoria}
           > genero: ${value.genero}
           ----------------------------- 
           `);

       });
       
       let novoArquivo = "./usuariosAtualizado.json";
       
       // JSON.stringify() - função para converter JSON para Texto
       fs.writeFile(novoArquivo, JSON.stringify(conteudo), (error) =>{
            if(!error){
                console.log(`Arquivo ${novoArquivo} criado com sucesso!`);
            }else{
                console.log("Um erro ocorreu: " + erro);
            }
       });
    }

});



// fs.readFile("./ArquivoTeste.txt",{encoding: 'utf-8'}, (erro, data) => {
//     if(!erro)
//     {
//         console.log(data);
//     }else{
//         console.log("Ocorreu um erro = " + erro);
//     }
// });


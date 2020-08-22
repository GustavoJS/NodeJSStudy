
/*


var nome1 = "José Neto"; // Variável Global
let nome2 = "Francisco"; // Variável Global


function func1(){
    nome1 = "Marcelo";
    nome2 = "Rafaela";
    var nome3 = "Joelma"; // Variável Local
    nome4 = "Walter"; // Variável Global

    console.log("Olá " + nome1);
    console.log("Olá " + nome2);
    console.log("Olá " + nome3);
}


function func2(){
    
    console.log("Oi " + nome1);
    console.log("Oi " + nome2);
    // console.log("Oi " + nome3);
    console.log("Oi " + nome4);
}

func1();
func2();


let a = 30; // Variável Global
let teste = true; // Variável Global

if(teste){
    let b = 20; // Variável Local devido ao Scopo
    var c = 70; // Variável Global devido a regra de Scopo que não se aplica à palavra reservada var
    console.log(a + b);
    console.log(a + c);
}

console.log(b);

*/

/**********************************************************************************************/
/**********************************************************************************************/
/*
let a = 0;

let funct1 = ( _ =>{
    let a = 123;
    let b = 5;
    let e = 15;
    // console.log(a + b);
    
    return functA() + e ;

    function functA(){
        c = 100; // Variável Global
        var d = 100; // Variável Global
        e = 200;
        return a + b;
    }    

});

console.log(funct1());
console.log(a);


function somarNumeros(valor1 = 20, valor2 = 30, valor3 = 7)
{
    return valor1 + valor2 + valor3;
}

function exibirResultados(){
    let a = 256;
    let b = 15;
    return a + b;
}


console.log("Resultado de todos os valores: " + somarNumeros());
console.log("Resultado de todos os valores: " + somarNumeros(20,50,exibirResultados()));
*/

/**********************************************************************************************/
/**********************************************************************************************/

/*
let nome = "Josmar";
let idade = 25;
let empresa = "IBM";
let ativo = true;

var user = {
    nome,
    idade, 
    empresa,
    ativo
}

console.log(user);
console.log("Tipo de dado: " + typeof user);
*/

/**********************************************************************************************/

// Utilizando operador Spread
/*
var empresa = {
    nomeEmpresa: "Microsoft Brasil",
    cidade: "São Paulo",
    site: "https://www.microsoft.com.br",
    email: "dev@microsoft.com.br"
}
let nome = "João";
let idade = 30;
let profissao = "Analista de sistemas";



let funcionario = {
    nome,
    idade,
    profissao,
    ...empresa
};

console.log(funcionario);

*/
/**********************************************************************************************/
/*
let soma = function(vl1, vl2, vl3, vl4){
    return vl1 + vl2 + vl3 + vl4;
}

const numeros = [12,5,3,20];
console.log("Soma dos números: " + soma(...numeros));

*/
/**********************************************************************************************/
/**********************************************************************************************/
// Utilizando Desestruturação  - Destructuring 

/*

var dadosFuncionario = {
    nome: 'Maria das Dores',
    idade: 60,
    profissao: 'camareira'
};

let x = [255,126,69,48,100,6];
let [a,b] = x;
let [c,d,e,f] = [12,66,54];

var { nome } = dadosFuncionario; 
// É a mesma coisa que  => var nome = dadosFuncionario.nome

var { idade } = dadosFuncionario;
var { profissao } = dadosFuncionario;

console.log(nome + " tem " + idade + " anos" + " a trabalha como " + profissao);
console.log("O valor de A é " + a + " e o valor de B é " + b );


console.log("O valor de D é " + d + " e o valor de E é " + e );
console.log("O valor de F é " + f );// Undefined porque não existe um valor definido para esta variável

*/


/**********************************************************************************************/
/**********************************************************************************************/
// Utilizando método Find

/*
var Victor = {
    nomeCompleto : "Victor Lima",
    empresa: "Microsoft",
    salario: 8600,
}

var Luiza = {
    nomeCompleto : "Luiza Melo",
    empresa: "Yahoo",
    salario: 12600,
}

var Caio = {
    nomeCompleto : "Caio Jose da Silva",
    empresa: "Google",
    salario: 15000,
}

var Rubens = {
    nomeCompleto: "Rubens de Souza",
    empresa: "IBM",
    salario: 8900,

}


var users = [Victor,Luiza,Caio,Rubens];
let verificarUser = users.find(user => user.nomeCompleto === "Luiza Melo");

let verificarPorSalario = users.find(user => user.salario >= 10000);


console.log(verificarUser);
console.log(verificarPorSalario);

*/

/**********************************************************************************************/
/**********************************************************************************************/
// Utilizando Template Literals


var a = 2344;
var b = 555;

// Realizando a interpolação
console.log(`O valor de A é ${a}`);
console.log(`O valor de A é ${a + b  + 1}`);
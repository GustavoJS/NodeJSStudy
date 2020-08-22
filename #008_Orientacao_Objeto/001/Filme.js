class Filme {
    constructor(titulo,ano,genero,diretor,atores,duracao){
/*
        this.titulo = '';
        this.ano     = 0;
        this.genero  = '';
        this.diretor = '';
        this.atores  = '';
        this.duracao =  0;
*/
        this.titulo = titulo;
        this.ano     = ano;
        this.genero  = genero;
        this.diretor = diretor;
        this.atores  = atores;
        this.duracao =  duracao;


    }

    Reproduzir(){
        console.log(`
        Reproduzindo filme '${this.titulo}'  >` );
    }

    Pausar(){
        console.log("Pausado ||");
    }

    Avancar(){
        console.log("Avançando >>");
    }

    Fechar(){
        console.log("Fechar X");
    }

}



Filme.prototype.Descricao = function(){
    console.log(`Você está assisindo ${this.titulo}`);
}



/*
var filmeA = new Filme();
filmeA.titulo = 'Prenda-me se for capaz';
filmeA.ano = 2003;
filmeA.genero  = 'Comédia dramático-biográfico';
filmeA.diretor = 'Steven Spielberg';
filmeA.atores  = 'Tom Hanks, Leonardo Di Caprio, Amy Adams';
filmeA.duracao =  '2h21m';
*/

var filmeA = new Filme('Prenda-me se for capaz',2003,'Comédia dramático-biográfico','Steven Spielberg','Tom Hanks, Leonardo Di Caprio, Amy Adams','2h21m');

console.log(filmeA.titulo);
filmeA.Reproduzir();
filmeA.Descricao();


console.log("======================================================================================");
console.log("======================================================================================");



/*
var filmeB = new Filme();
filmeB.titulo = 'Pantera Negra';
filmeB.ano = 2018;
filmeB.genero  = 'Ação, Aventura, Ficção Científica';
filmeB.diretor = 'Ryan Coogler';
filmeB.atores  = 'Michael B. Jordan, Chadwick Boseman, Letitia Wright';
filmeB.duracao =  '2h15m';
*/

// Ou

var filmeB = new Filme('Pantera Negra',2018,'Ação, Aventura, Ficção Científica','Ryan Coogler','Michael B. Jordan, Chadwick Boseman, Letitia Wright','2h15m');

console.log(filmeB.titulo);
filmeB.Reproduzir();
filmeB.Descricao();

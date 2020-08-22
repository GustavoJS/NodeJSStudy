class Animal{

    constructor(nome, tipo, peso, idade){
        this.nome = nome;
        this.tipo = tipo
        this.peso = peso;
        this.idade= idade;
    }

    ExibirDetalhes(){
        console.log(`
        -----------------------------------------------
        Descrição --
        -----------------------------------------------
        Nome = ${this.nome}
        tipo = ${this.tipo}
        peso = ${this.peso}
        idade = ${this.idade}
        `);
    }

    Atacar(tipoDefesa){
        console.log(`${this.tipo} ${tipoDefesa}!!`);
    }    
}

class Cachorro extends Animal{
    constructor(nome, tipo, idade, tempoDeVida){ // tempoDeVida sendo criado a partir do construtor
        
        // Obtendo as propriedades da classe Mãe a partir do Método Construtor
        super(nome, tipo, idade); 
        this.tempoDeVida = tempoDeVida;
        
    }
    Latir(){
        console.log("Rolf!...Rolf!...");
    }
    Uivar(){
        console.log("AUuuuuuuu!!!!");
    }

    Atacar(){
        super.Atacar('rosnando');
    }


}

class Gato extends Animal{
    Miar(){
        console.log("MiAaau!... MiAaau!...");
    }

    Ericar(){
        console.log("Shiiii!!!!");
    }

    Atacar(){
        // console.log("Utilizando o método da classe Animal");
        super.Atacar('eriçando');
        // console.log("Arqui vem funcionalidade");
    }
}


let gato1 = new Gato();

gato1.nome = 'Batolomeo';
gato1.tipo = 'Gato';
gato1.idade = 2;
gato1.peso  = '12kg';
gato1.ExibirDetalhes();
gato1.Atacar();


let cachorro1 = new Cachorro("Bidu","Cachorro",12);
// cachorro1.nome = "Bidu";
// cachorro1.tipo = "Cachorro";
// cachorro1.idade = 12;
cachorro1.peso = '32kg';
cachorro1.tempoDeVida = '18 anos';

cachorro1.ExibirDetalhes();
console.log(`Tempo de vida ${cachorro1.tempoDeVida}`);
cachorro1.Atacar();

// let cachorro1 = new Cachorro();
// cachorro1.nome = 'Inna';
// cachorro1.tipo = 'Cachorro';
// cachorro1.idade = 8;
// cachorro1.peso  = '25kg';
// cachorro1.ExibirDetalhes();
// cachorro1.Atacar();
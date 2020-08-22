class Leitor{
    Ler(){
       console.log("Lendo o arquivo"); 
    }
}

class Escritor{
    Escrever(file, list){
        console.log(
        `------------------------------------- 
        Lista: ${list}
        ------------------------------------- 
        Arquivo: ${file}`); 
     }
}

class Criador{
    Criar(){
        console.log("Criando o arquivo"); 
     }
}

class CriadorPdf{
    CriarPdf(){
        console.log("Criando arquivo PDF");
    }
}

class Destruidor{
    Deletar(){
        console.log("Deletando o arquivo"); 
     }
}

class ManipuladorDeArquivo
{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();

    }
}

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new Criador();
        this.criadorPdf = new CriadorPdf();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(lista){
        this.criador.Criar("usuario.txt");
        this.criadorPdf.CriarPdf("usuario.pdf");
        this.escritor.Escrever("usuario.txt", lista)

    }
}

var manipulador = new ManipuladorDeArquivo();

// manipulador.leitor.Ler();
// manipulador.escritor.Escrever();
// manipulador.criador.Criar();
// manipulador.destruidor.Deletar();

let usuarios = new GerenciadorDeUsuarios();

usuarios.SalvarListaDeUsuarios(["victor","lima"]);


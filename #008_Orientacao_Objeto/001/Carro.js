class Carro {
    constructor(){
        this.marca = '';
        this.modelo = '';
        this.cor = '';
        this.placa = '';
        this.ano = 0;
        this.estado = '';
        this.statusLocacao = false;
        this.codigoLocacao = 0;


    }

    AlugarVeiculo(){
        
        if(this.statusLocacao == false){

            this.statusLocacao = true;
        
            console.log(`
            Veículo Alugado
            ----------------------------
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Cor: ${this.cor}
            Placa: ${this.placa}
            Ano: ${this.ano}
            Estado: ${this.estado}
            ----------------------------
            `);
        
        }else{
            console.log(`Veículo ${this.codigoLocacao} já foi alugado`);
        }
    }

    DevolverVeiculo(){

        if(this.statusLocacao == true)
        {
            this.statusLocacao = false;

            console.log(`
            O veículo foi devolvido para futura locação
            ----------------------------
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Cor: ${this.cor}
            Placa: ${this.placa}
            Ano: ${this.ano}
            Estado: ${this.estado}
            Status: Devolvido para locação
            ----------------------------
            `);            
        }else{

            console.log(`
            O veículo já disponível para locação
            ----------------------------
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Cor: ${this.cor}
            Placa: ${this.placa}
            Ano: ${this.ano}
            Estado: ${this.estado}
            ----------------------------
            `);                    
        }
    }
}


var carroA = new Carro();

carroA.marca = 'Wolksvagen';
carroA.modelo = 'Up';
carroA.cor = 'Vermelho';
carroA.placa = 'ABC-8532';
carroA.ano = 2018;
carroA.estado = 'São Paulo';
//carroA.statusLocacao = true;
carroA.codigoLocacao = 001;

carroA.AlugarVeiculo();

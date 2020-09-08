<template>
    <div>
        <!-- <h1>Categoria de veículos automotivos</h1> -->
        <button @click="changeColor($event)">Aplicar Evento Click</button>
        <br><br>
        <button @click="emitirEventoDelete">Deletar</button>
        <br><br>
        <div :class="{'vehicle': !isChecked,'check-vehicle': isChecked}">

            <p>Id: {{veiculo.id}}</p>
            <p>Modelo: {{veiculo.modelo}}</p>
            <p>Marca: {{veiculo.marca | exibirCaixaAlta}}</p>
            <p>Categoria: {{veiculo.categoria | exibirCaixaAlta}}</p>
            <label>Id Especial: {{exibirIdEspecial}}</label>

        </div>
    </div>
        
</template>

<script>
export default {
    data(){
        return{
            isChecked: false,
            
        }
    },
    props: {
        id: Number,
        modelo: String,
        marca: String,
        veiculo: Object

    },

    methods: {
        changeColor: function($event){
            console.log($event);
            // console.log("Function called...!");
            this.isChecked = !this.isChecked;
        },

        emitirEventoDelete: function(){
            console.log("Removendo");
            this.$emit("deletaItem", {idVeiculo : this.veiculo.id, modelos: "Diversos modelos de veículo", marca: "Diversas marcas", component: this});


        },

        mostrarMensagem: function(){
            alert("O produto será deletado!");
        }
    },

    filters: {
        exibirCaixaAlta: function(value){
            return " - " + value.toUpperCase() + " - ";
        }
    },

    computed: {
        exibirIdEspecial : function(){
            // return (this.veiculo.modelo + this.veiculo.marca +"*"+ this.veiculo.id).toUpperCase();
            return (this.veiculo.modelo + this.veiculo.marca +"*"+ this.veiculo.id).split('').reverse().join('').toUpperCase();
        }
    }
}
</script>


<style >
    .vehicle{
        border: 1px solid black;
        font-size: 20px;
        background-color:#b5b5ec;
        margin: 5px;
        padding: 5px
    }

    .check-vehicle{
        border: 1px solid black;
        font-size: 20px;
        background-color:#ecb5b5;
        margin: 5px;
        padding: 5px
    }

</style>
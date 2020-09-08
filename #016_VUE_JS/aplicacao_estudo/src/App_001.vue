<template>
  <div id="app">
    <h1>Guia clientes</h1>
    <Cliente clientName="Elandro" />
    <hr>
    <h1>Lista de produtos Cadastrados</h1>
    <input type="number" v-model="novoIdProduto">
    <hr>
    <input type="text" v-model="novoNomeProduto">

    <hr>
<!--     
    <ProdutoUnico idProduto= 266 nomeProduto="Smartphone Samsung" :produtoAtivo="false"/>
    <ProdutoUnico idProduto= 93 nomeProduto="PlayStation 4 Pro 500GB" :produtoAtivo="true"/>
    <ProdutoUnico idProduto= 3 nomeProduto="Notebook Alienware" :produtoAtivo="true"/>
    <ProdutoUnico idProduto= 77 nomeProduto="Parafusadeira" :produtoAtivo="false"/> 
-->
    <ProdutoUnico nomeProduto="Smartphone Samsung" :produtoAtivo="false"/>
    <ProdutoUnico nomeProduto="PlayStation 4 Pro 500GB" :produtoAtivo="true"/>
    <ProdutoUnico nomeProduto="Notebook Alienware" :produtoAtivo="true"/>
    <ProdutoUnico nomeProduto="Parafusadeira" :produtoAtivo="false"/>

    <hr><hr><hr>
    <h1>Categoria de veículos automotivos</h1>
    <Veiculo :veiculo ="dadoVeiculo"/> 
    
    <hr><hr><hr>
    <h1>Utilizando V-FOR</h1>
    <div v-for="(vehicle, index) in vehiclesList" :key="vehicle.id">
      <h4>{{ index }}</h4>
      <input type="text" v-model="vehicle.modelo" />
      <input type="text" v-model="vehicle.marca" />      
      <input type="text" v-model="vehicle.categoria" />

      <br /><br />

      <Veiculo :veiculo="vehicle" />
      <hr>

    </div>
    
  </div>
</template>

<script>
import Cliente from './components/Cliente';
import ProdutoUnico from './components/Produto';
import Veiculo from './components/Veiculo';

export default {
  name: 'App',
  
  data(){
    return{
      novoIdProduto: 0,
      novoNomeProduto: "Novo Produto",

      dadoVeiculo: {
        id: "035",
        modelo: "HB20",
        marca: "Hyundai",
        categoria: "Sedan",
      },

      vehiclesList: [
        {
          id: "033",
          modelo: "UP",
          marca: "Wolksvagen",
          categoria: "Compacto"
        },
        
        {
          id: "56",
          modelo: "Creta",
          marca: "Hyundai",
          categoria: "SUV"
        },        

        {
          id: "996",
          modelo: "KA",
          marca: "Ford",
          categoria: "HATCH"
        },
        
        {
          id: "30",
          modelo: "206",
          marca: "Peugeot",
          categoria: "HATCH"
        },
        
        {
          id: "94",
          modelo: "FOX",
          marca: "Wolksvagen",
          categoria: "Compacto"
        },        
      ],

    }
  },
  components: {
    Cliente,
    ProdutoUnico,
    Veiculo
  }
}
</script>

<style>

</style>

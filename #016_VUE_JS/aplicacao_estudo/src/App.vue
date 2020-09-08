<template>
  <div id="app">
    
    <div class="container">
      <small class="errorField" v-show="isError">Preencha todos os campos!!</small><br>    
      <h3 id="form-field" class="title is-4 is-spaced bd-anchor-title">
        <span class="bd-anchor-name">Cadastro</span>
        <a class="bd-anchor-link" href="#form-field">#</a>
      </h3>
    
      <div class="field">
        <label class="label">Modelo:</label>
        <div class="control">
          <input class="input" type="text" placeholder="Modelo" v-model="modeloField" />
        </div>
      </div>

      <div class="field">
        <label class="label">Marca:</label>
        <div class="control">
          <input class="input" type="text" placeholder="Marca" v-model="marcaField" />
        </div>
      </div>

      <div class="field">
        <label class="label">Categoria:</label>
        <div class="control">
          <input class="input" type="text" placeholder="Categoria" v-model="categoriaField" />
        </div>
      </div>    

      <div class="buttons">
        <button class="button is-warning" @click="saveVehicle()">Cadastrar</button>
      </div>
    </div>


    <hr><hr>

    <h1>Categoria de veículos automotivos</h1>
    <hr><hr><hr>
    <h1>Utilizando V-FOR</h1>
    <!-- <div v-for="(vehicle, index) in vehiclesList" :key="vehicle.id"> -->
    <div v-for="(vehicle, index) in orderVeiculos" :key="vehicle.id">
      <h4>{{ index }}</h4>
      <input type="text" v-model="vehicle.modelo" />
      <input type="text" v-model="vehicle.marca" />      
      <input type="text" v-model="vehicle.categoria" />

      <br /><br />

      <Veiculo :veiculo="vehicle" @deletaItem="deletarVeiculo($event)" />
      <hr>

    </div>
    
  </div>
</template>

<script>
import _ from 'lodash';
import Veiculo from './components/Veiculo';

export default {
  name: 'App',
  
  data(){

    return{
      modeloField: "",
      marcaField: "",
      categoriaField: "",


      vehiclesList: [
        {
          id: "033",
          modelo: "Up",
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
          modelo: "Ka",
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
          modelo: "Fox",
          marca: "Wolksvagen",
          categoria: "Compacto"
        },        
      ],

    }
  },
  
  components: {
    Veiculo
  },

  props: {
    isError: Boolean
  },

  methods: {
    saveVehicle: function() {
      if(this.modeloField == "" || this.marcaField  == "" || this.categoriaField == "")
      {
        this.isError = true;

      }else{
        // this.vehiclesList.push({
        this.vehiclesList.unshift({
            id: this.generateNumber(),
            modelo: this.modeloField, 
            marca: this.marcaField, 
            categoria: this.categoriaField
            });

            this.modeloField = ""; 
            this.marcaField = "";
            this.categoriaField = ""; 
            this.isError = false;         
      }
       
    },
    
    generateNumber: () => Math.floor((Math.random() * (500 - 100) + 100)).toString(),

    deletarVeiculo: function($event){
      console.log("recebendo evento!");
      console.log($event);
      console.log(`Id do veículo ${$event.idVeiculo}`);
      $event.component.mostrarMensagem();
      
      var id = $event.idVeiculo;
      var novoArray = this.vehiclesList.filter(veiculo => veiculo.id  != id)
      
      this.vehiclesList = novoArray;

      $event.component.isChecked = true;

    }
  },

  computed: {
    orderVeiculos: function(){
        return _.orderBy(this.vehiclesList,['id'],['asc'])
    }
  }
}
</script>

<style>
  .errorField{
    color: #8d3d3d;
    background-color: #ffcbcb;
    font-size: 22px;
  }
</style>

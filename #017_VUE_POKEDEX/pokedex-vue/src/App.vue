<template>
  <div id="app">
    <img src="./assets/anyLogo.jpg" alt="any-logo" class="any-logo">
    
    <b-form inline class="justify-content-md-center">
      <!-- <div inline class="justify-content-md-center"> -->
        <b-input type="text" class="mr-sm-2" id="input-large" size="lg" aria-describedby="password-help-block" placeholder="Buscar pokemon pelo nome" v-model="busca"></b-input>
        <b-button variant="danger" @click="buscar">Pesquisar</b-button>
        <!-- <button variant="danger" v-on:click.native="buscar">Pesquisar</button> -->
        


      <!-- </div> -->
    </b-form>
    
    <!-- <div v-for ="(poke, index) in pokemons" :key="index"> -->
    <!-- <div v-for ="(poke, index) in exibirBusca" :key="index"> -->
    <div v-for ="(poke, index) in pokemonsFiltrados" :key="poke.url">

      <!-- <h1>{{index + 1}} - {{poke.name}}</h1> -->
      <Pokemon :num="index + 1" :name="poke.name" :url="poke.url" />
    </div>


  </div>
</template>

<script>
import axios from 'axios';
import Pokemon from './components/Pokemon';




export default {
  name: 'App',
  components: {
    Pokemon
  },

  data(){
    return {
      pokemons: [],
      pokemonsFiltrados: [],
      busca: '',
      counter: 0,
    }
  },
  created: function() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(res => {
      
      // console.log(res.data.results);
      this.pokemons = res.data.results;
      this.pokemonsFiltrados = res.data.results;
    })
  },
  methods: {
    buscar: function(){
      this.pokemonsFiltrados = this.pokemons;
      
      if(!this.busca){
        
        this.pokemonsFiltrados = this.pokemons;
      }else{
        this.pokemonsFiltrados = this.pokemons.filter((pokemon) => pokemon.name.toUpperCase().indexOf(this.busca.toUpperCase()) > -1)
        // this.pokemonsFiltrados = this.pokemons.filter((pokemon) => pokemon.name.toUpperCase() == this.busca.toUpperCase());
        
      }
    }
  },
  computed: {
    /*
    exibirBusca: function(){
      if(!this.busca){
        return this.pokemons;
      
      }else{
        // return this.pokemons.filter(pokemon => pokemon.name == this.busca);
        
        return this.pokemons.filter((pokemon) => pokemon.name.toUpperCase().indexOf(this.busca.toUpperCase()) > -1);
        
     
      }
    }
    */    
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.any-logo {
  width: 20%;
}

.form-search {
      text-align: center;
      padding: 0 13% 0 13%;
}

.input-search {
  width: 30%;
}
</style>

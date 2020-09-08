<template>
    <div class="content">
<!-- 
        <h1>{{num}} - {{name | capitalizeWord}}</h1>
        <small>{{url}}</small>
 -->
        <div class="position-relative p-4">
            <b-card> 
            <b-img center :src="currentImg" style="width: 12%" alt="Center image"></b-img>
            <b-card-text><h2>{{num + ' - ' + name | capitalizeWord}} </h2></b-card-text>
            <b-card-text><h4 >{{pokemon.type}}</h4></b-card-text>
            <b-button pill variant="outline-danger" class='mt-3' @click="mudarSprite">Mudar Sprite</b-button>
        </b-card>

        </div>
        
    </div>

</template>


<script>

import axios from 'axios';

export default {
    props: {
        num: Number,
        name: String,
        url: String
    },

    filters:{
        capitalizeWord: function(value){
            let newName = value[0].toUpperCase() + value.substring(1);
            return newName;
        }
    },

    created: function(){
        axios.get(this.url).then( res => {
            // console.log(res.data);
            this.pokemon.type = res.data.types[0].type.name;
            this.pokemon.front = res.data.sprites.front_default;
            this.pokemon.back = res.data.sprites.back_default;
            this.currentImg =  this.pokemon.front;
            // console.log(this.pokemon);
        })
    },

    data(){
        return{
            isFront: true,
            currentImg: '',
            pokemon: {
                type: '',
                front: '',
                back: '',
            }
        }
    },

    methods: {
        mudarSprite: function(){
            if(this.isFront){
                this.isFront = false;
                this.currentImg = this.pokemon.back;
            }else{
                this.isFront = true;
                this.currentImg = this.pokemon.front;
            }
        }
    }
}
</script>

<style scoped>

</style>
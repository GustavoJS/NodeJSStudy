<template>
    <div>

        <div class="title">
            <h1>Editar usuário </h1>
        </div>
        <hr>
        <div class="columns is-centered">
            <div class="column is-half">

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Name:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <p class="control">
                            <input type="text" placeholder="Nome do usuário" class="input" v-model="name" />
                        </p>
                        </div>
                    </div>
                </div>


                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Email:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <p class="control">
                            <input type="email" placeholder="email@email.com" class="input" v-model="email" />
                        </p>
                        </div>
                    </div>
                </div>

                <hr>
                <button class="button is-success is-outlined" @click="updateUser">Atualizar</button>
            </div>
        </div>

        <div v-if="error != undefined">

            <div class="notification is-danger">
                <p>{{error}}</p>
            </div>            
        </div>

    </div>    
</template>

<script>

import axios from "axios"

export default {
    data(){
        return{
            id:0,
            name: "",
            email:"",
            error: undefined,

            req: {
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
        }
    },


    created(){
        
        
        axios.get("http://localhost:3535/user/" + this.$route.params.userId, this.req).then(res => {
           
           this.id = res.data[0].id;
           this.name = res.data[0].name;
           this.email= res.data[0].email;
        }).catch( error => {
           console.log(error.response);
           this.$router.push({name: "Users"});

        })
    },
  
    methods: {
       
        updateUser: function(){

            axios.put("http://localhost:3535/user/",{
                id: this.id,
                name: this.name,
                email: this.email,

            },this.req).then(() =>{

                this.name = "";
                this.email = "";
                this.id = 0;
                this.$router.push({name: 'Users'});

            }).catch(errorMsg => {
            console.log(errorMsg.response);
                this.error = errorMsg.response.data;
            });
        },
    }


}
</script>

<style scoped>

</style>
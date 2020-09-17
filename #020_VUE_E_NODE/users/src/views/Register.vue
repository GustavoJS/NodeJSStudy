<template>
    <div>
        <div class="title">

            <h1>Cadastro de usuário </h1>
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


                <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Senha:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <p class="control">
                        <input type="password" placeholder="******" class="input" v-model="password" />
                    </p>
                    </div>
                </div>
                </div>
                <hr>
                <button class="button is-info is-outlined" @click="register">Cadastrar</button>
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
import axios from 'axios';

export default{
    data(){
        return{
            name: "",
            email: "",
            password: "",
            error: undefined,
        }
    },

    methods: {
    
        register(){
            axios.post("http://localhost:3535/user", {
                name: this.name,
                email: this.email,
                password: this.password

            }).then(res =>{
                
                console.log("Response: " + res.data);

                this.name = "";
                this.email = "";
                this.name = "";
                this.$router.push({name: 'Home'});

            }).catch(errorMsg => {
                this.error = errorMsg.response.data.status;
                // console.log(msg);
            });


        },

    }

}

</script>


<style scoped >

</style>>
<template>
    <div>
        <div class="title">

            <h1>Acesse o portal</h1>
        </div>
        <hr>
        <div class="columns is-centered">
            <div class="column is-half">

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
                <button class="button is-success is-light is-large" @click="signIn">Entrar</button>
                <hr>
            </div>
        </div>

        <div v-if="error != undefined">

            <div class="notification is-warning">
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
             email: "",
            password: "",
            error: undefined,
        }
    },

    methods: {
    
        signIn(){
            axios.post("http://localhost:3535/login", {
                email: this.email,
                password: this.password

            }).then(res =>{

                this.email = "";
                this.password = "";

                console.log(res);

                localStorage.setItem('token', res.data.token)
                this.$router.push({name: 'Home'});


            }).catch(errorMsg => {
                 this.error = errorMsg.response.data.status;
            });


        },

    }

}

</script>


<style scoped >

</style>>
<template>
    <div>
        <h1>Painel Administrativo </h1>    
        <hr>
        <h1>Lista de usuários </h1>
        <hr>
        <div class="container is-vcentered">


            <table class="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>Cargo</th>
                    <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody v-for="user in users" :key="user.id">
                    <tr>
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.role | roleProcess}}</td>
                        <td>
                            <!-- <button class="button is-success" @click="editUser(user.id)">Edit</button> -  -->
                            <router-link :to="{name:'EditUser', params:{userId: user.id}}"><button class="button is-success">Edit</button></router-link> - 
                            <button class="button is-danger" @click="showModalDelete(user.id)">Delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        <!-- <div class="modal is-active"> -->
        <div :class="{modal:true, 'is-active': showModal}">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        Deletar Usuário
                        </p>
                        <a href="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </a>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <p>Você deseja realmente deletar este usuário ?</p>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item" @click="deleteUser">Deletar</a>
                        <a href="#" class="card-footer-item" @click="closeModal">Cancelar</a>
                    </footer>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
        </div>

    </div>    
</template>

<script>
import axios from 'axios';
export default {

   created(){

       axios.get("http://localhost:3535/user",this.req).then(res => {

            this.users = res.data;
       }).catch(error => {
           
           console.log(error);
       })
   },

   data(){
       return {
            users: [],
            req: {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            },

            showModal: false,
            deleteUserId: 0,
       }
   },

   methods: {
       closeModal: function(){
           this.showModal = false;
       },

       showModalDelete: function(id){
           this.deleteUserId = id;
           this.showModal = true;
       },
       
       editUser: function(id){ this.$router.push({name:"EditUser", params: {userId: id}}) },
       
       deleteUser: function(){
           axios.delete("http://localhost:3535/user/" + this.deleteUserId,this.req).then(res => {
               
                console.log(res);
                this.showModal = false;
                this.users = this.users.filter(u => u.id != this.deleteUserId);

            }).catch(error =>{

                console.log(error);
           });
       }


   },

   filters: {
        roleProcess: (value) => {
            if(value == 0)
            {
                return "User";
            }else{

                return "Admin";
            }
        }
    }



}
</script>


<style scoped>

</style>
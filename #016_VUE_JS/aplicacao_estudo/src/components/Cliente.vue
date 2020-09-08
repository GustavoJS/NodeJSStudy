<template>
<div :class="{'client': !isPremium, 'client-premium': isPremium}">
    
    <h1>{{clientName}}</h1>
    <hr>
    <form action="">
        <input type="text" :value="clientName">
        <hr>
        <input type="number" :value="idade">
        <hr>
        <input type="text" :value="profissao">
        <hr>
        <input type="text" :value="estadoCivil">
        <hr>
        <input type="text" :value="estadoNatal">
    </form>
    
    <hr><hr>
    <h1>Utilizando two way data binding com v-model</h1>
    <hr>
    <form action="">
        <input type="text" v-model="clientName">
        <hr>
        <input type="number" v-model="idade">
        <hr>
        <input type="text" v-model="profissao">
        <hr>
        <input type="text" v-model="estadoCivil">
        <hr>
        <input type="text" v-model="estadoNatal">
    </form>

    <hr>
        <div class="content">
            <h2>{{clientName}}</h2>
            <p>Idade: {{idade}}</p>
            <p>Profissao: {{profissao}}</p>
            <p>Estado Civil: {{estadoCivil}}</p>
            <p>Estado Natal: {{estadoNatal}}</p>
        </div>

</div>

</template>
<script>
export default {
    data(){
        return {

            isPremium: true,
            clientName: "Joaquim",
            idade: 25,
            profissao: "Gerente Bancário",
            estadoCivil: "Divorciado",
            estadoNatal: "RJ"

        }
    }
}
</script>

<style scoped>
    .client{
        background-color: #c2ebc2;
        color:#13b4b4;
        
    }
    

    .client-premium{
        background-color: #e7e19a;
        color: #b42213;
        
    }    
    .content{
        background-color:beige;
        width:260px;
    }


</style>
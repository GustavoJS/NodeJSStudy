<template>
    <div>
        <ul>
            <!-- <li><b>Id:</b> {{ idProduto }}</li> -->
            <li><strong>Nome do Produto:</strong> {{nomeProduto}}</li>
            <!-- <li><strong>Status do Produto:</strong> {{(produtoAtivo == true) ? "Disponível" : "Indisponível" }}</li> -->
            <li>
<!-- 
                <strong>Status do Produto: </strong> 
                <label v-if="produtoAtivo === true">{{"Produto Disponível"}}</label>
                <label v-else>{{"Produto Indisponível"}}</label>
-->
                <label class="statusProduto" v-show="produtoAtivo === false">{{"Produto Indisponível"}}</label>
            </li>

        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return {
            // idProduto: 256,
            // nomeProduto: "Smartphone da Samsung"
        }
    },
    
    props: {
        // idProduto: Number,
        nomeProduto: String,
        produtoAtivo: Boolean,
    }
}
</script>

<style>
    ul li{
        list-style: none;
    }

    .statusProduto{
        color: red;
    }
</style>
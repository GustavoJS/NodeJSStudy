<template>
    <div class="content-form">
        <form class="form">
            <label for="">Name:</label>
            <input type="text" placeholder="Insira o nome"/>
            <br>
            <label for="">Profession:</label>
            <input type="text" placeholder="Insira a profissão "/>            
            <br>
            <label for="">Company:</label>
            <input type="text" placeholder="Insira a comapnhia">
            <br>
            <input type="submit" name="Cadastrar" />
        </form>
    </div>
</template>

<script>
export default {
 name: 'CadClient'

}

</script>

<style >
    .content-form{
        /* align-items: center; */
        display:flex;
        justify-content: center;

    }
    .form{
        border: 1px solid #999;
        height:auto;
        max-width: 38%;
        width: 38%;
        text-align:left;
        padding: 5px
    }
    label, input{
         display: block;
    }
    label{
        margin-bottom: 5px;
    }
    input{
        height: 14%;
        font-size: 15px;
    }

</style>
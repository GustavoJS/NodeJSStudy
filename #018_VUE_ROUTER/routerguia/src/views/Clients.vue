<template>
    <div>
        <div class="content-table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Profession</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 001 </td>
                        <td> Adalberto </td>
                        <td> Assistente de logística  </td>
                        <td> LogTrans  </td>
                    </tr>

                    <tr>
                        <td> 002 </td>
                        <td> Jadielson </td>
                        <td> Farmaceutico  </td>
                        <td> Drogatia SP  </td>
                    </tr>                
                </tbody>
            </table>
        </div>
        <br>
        <h1>{{parametroDaRota}}</h1>
        <br>
        <CadClient />


    </div>
</template>

<script>
import CadClient from '../components/CadClient'

export default {
    created(){
        console.log(`ID recebido : ${this.$route.params.id}`);

        this.parametroDaRota = this.$route.params.id;
    },

    data(){
        return {
            
            parametroDaRota : "Nenhuma informação",
        }
    },

    name: 'Clients',
    components: {
        CadClient
    }
}
</script>

<style scoped>
    .content-table{
        /* align-items: center; */
        display:flex;
        justify-content: center;

    }

    table, th, td{
        padding: 10px;
        border: 1px solid #999;
        border-collapse: collapse;
    }
</style>
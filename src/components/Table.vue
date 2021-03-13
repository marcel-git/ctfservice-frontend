<template>
    <div class="Table">
        <div class="container">
            <table>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Admin</th>
                </tr>
                <tr class="row" v-for="object in content" :key="object.id">
                    <td>{{object.id}}</td>
                    <td>{{object.username}}</td>
                    <td>{{object.mail}}</td>
                    <td>{{object.admin}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import { getUser } from "@/scripts/user.service";

    export default {
        name: "Table",
        props: {
            type: String
        },
        data() {
            return  {
                content: []
            }
        },
        created: async function(){
            let temp = getUser();
            temp.then(data => this.content=data)
        }
    }
</script>

<style scoped>



    table {
        text-align: center;
        width: 75%;
        margin: 2% 10% 0% 10%;
        border-spacing: 0;
    }

    th, td {
        padding: 15px;
    }

    tr:nth-child(even){
        background: #ffffff;
    }

    tr:nth-child(odd) {
        background: #f5f5f5;
    }

    .row:hover{
        color: #555;
        background: #f5f5f5;
    }

    .row {
        color: #808080;
    }

    th {
        background: #2F343D;
    }
</style>
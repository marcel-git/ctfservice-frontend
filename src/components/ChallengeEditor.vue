<template>
    <div class="ChallengePage">
        <h1 v-if="mode=='create'">Create challenge</h1>
        <div class="inputs">
            <input v-model="name" id="name" type="text" class="css-input" placeholder="Titel" />
            <br>
            <textarea v-model="description" type="text" class="css-input" placeholder="Description" />
            <br>
            <input v-model="points" type="number" class="css-input" placeholder="Points" />
            <input v-model="solution" type="text" class="css-input" placeholder="Solution" />
        </div>
        <div class="buttons">
            <router-link v-if="mode=='create'" class="myButton" to="/admin/challenges">Back</router-link>
            <a v-if="mode=='create'" href="#" class="myButton" v-on:click="sendChallenge">Create</a>
            <a v-else href="#" class="myButton" v-on:click="updateChallenge">Update</a>
        </div>


    </div>
</template>

<script>
    import {createChallenge, getChallenge, updateChallenge} from "@/scripts/challenge.service";

    export default {
        name: "ChallengePage",
        props: {
            mode: String,
            id: Number
        },
        data() {
            return {
                name: "",
                description: "",
                points: "",
                solution: "",
            }
        },
        methods: {
            sendChallenge: function() {
                createChallenge({"name": this.name, "text": this.description, "points":this.points, "solution":this.solution});
                this.$router.go(0)
            },
            updateChallenge: function () {
                updateChallenge(this.id, {"name": this.name, "text": this.description, "points":this.points, "solution":this.solution});
                this.$router.go(0)
            }
        },
        created: async function () {
            if(this.mode == 'update'){
                var temp = await getChallenge(this.id);
                if(!temp){
                    console.log("Page not found!")
                }else{
                    this.name = temp.name;
                    this.description = temp.text;
                    this.points = temp.points;
                    this.solution = temp.solution;
                }
            }
        },
    }
</script>

<style scoped>
.ChallengePage {
    text-align: center;
}



#name {
    width: 100%;
    text-align: center;
}

.buttons {
    margin: 0 auto;
    width: 50%;
    text-align: right;
}

.myButton {
    background-color:#42b983;
    border-radius:20px;
    display:inline-block;
    cursor:pointer;
    color: azure;
    font-family:Arial;
    font-size:17px;
    padding:16px 31px;
    text-decoration:none;
    margin-left: 10px;
}

.inputs {
    margin: 0 auto;
    width: 50%;
    text-align: left;
}

textarea {
    width: 100%;
    height: 300px;
}

.css-input {
    padding: 10px;
    font-size: 16px;
    border-width: 0px;
    background-color: #2f343d;
    color: #F0FFFF;
    border-style: solid;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(66,66,66,.75);
    text-shadow: 0px 0px 5px rgba(66,66,66,.75);
    margin: 5px 5px 5px 5px;
}
.css-input:focus {
    outline:none;
}
</style>
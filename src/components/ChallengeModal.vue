<template>
    <div class="Challenge" v-on:click="closeModal">
        <div id="myBtn" class="flip-card" v-on:click="showModal(challenge.name)">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    {{challenge.name}}
                </div>
                <div class="flip-card-back">
                    {{challenge.points}}
                </div>
            </div>
        </div>
        <div :id="challenge.name" class="modal">
            <div class="modal-content" id="content">
                <h1>{{challenge.name}}</h1>
                <p>{{challenge.text}}</p>
              <br>
              <input v-model="flag" type="text" class="css-input" placeholder="Flag" />
              <a href="#" class="myButton" v-on:click="verifyAnswer">Submit</a><br>
            </div>
        </div>

    </div>
</template>

<script>
    import Challenge from "@/model/Challenge";
    import {verify} from "@/scripts/challenge.service";

    // Get all elements with class="closebtn"
    var close = document.getElementsByClassName("closebtn");
    var i;

    // Loop through all close buttons
    for (i = 0; i < close.length; i++) {
        // When someone clicks on a close button
        close[i].onclick = function(){

            // Get the parent of <span class="closebtn"> (<div class="alert">)
            var div = this.parentElement;

            // Set the opacity of div to 0 (transparent)
            div.style.opacity = "0";

            // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
            setTimeout(function(){ div.style.display = "none"; }, 600);
        }
    }

    export default {
        name: "Challenge",
        props: {
            challenge: new Challenge('','','',''),
        },
        data() {
            return {
                flag: "",
                result: ""
            }
        },
        methods: {
          showModal: function(name){
            var modal = document.getElementById(name);
            modal.style.display = "block"
          },
          closeModal: function (event){
            var modal = document.getElementById(this.challenge.name);
            if(event.target.id == modal.id){
              modal.style.display = "none"
            }
          },
          verifyAnswer: async function () {
              const result =  await verify({challengeID: this.challenge.id, solution: this.flag});
              this.result = result;
          }
        }
    }
</script>

<style scoped>

    .alert {
        opacity: 1;
        transition: opacity 0.6s; /* 600ms to fade out */
        background-color: green;
        text-align: center;
        height: 50px;

    }

    .flip-card {
        background-color: transparent;
        width: 300px;
        height: 200px;
        /*border: 1px solid #f1f1f1;*/
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
        float: left;

        margin-left: 1%;
        margin-top: 1%;
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        border-radius: 20px;

        text-align: center;
        vertical-align: middle;
        line-height: 200px;
    }

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
        background-color:  #42b983;
        color: #2F343D;
    }

    /* Style the back side */
    .flip-card-back {
        background-color: #2F343D;
        color: #42b983;
        transform: rotateY(180deg);
    }

    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */

        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content/Box */
    .modal-content {
        background-color: #2F343D;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        border-radius: 20px;
        width: 25%; /* Could be more or less, depending on screen size */
      text-align: center;
    }

    .css-input {
      padding: 10px;
      font-size: 16px;
      border-width: 0px;
      background-color: #2f343d;
      color: #F0FFFF;
      border-style: solid;
      border-radius: 20px;
      box-shadow: 0px 0px 5px white;
      text-shadow: 0px 0px 5px rgba(66,66,66,.75);
    }
    .css-input:focus {
      outline:none;
    }

    .myButton {
      background-color:#42b983;
      border-radius:20px;
      display:inline-block;
      cursor:pointer;
      color: azure;
      font-family:Arial;
      font-size:17px;
      padding:10px 31px;
      text-decoration:none;
      margin-left: 20px;
    }
    .myButton:hover {
      background-color:#F0FFFFFF;
      color: #2F343D;
    }
    .myButton:active {
      position:relative;
      top:1px;
    }
</style>
<template>
    <div class="PageEditor">
        <div id="editor">
            <MarkdownEditor v-model="markdown" :theme="theme"/>
        </div>
        <div id="submit">
            <router-link v-if="type=='create'" to="/admin/pages" class="myButton">Back</router-link>
            <a v-if="type=='create'" href="#" class="myButton" v-on:click="sendPage">Create</a>
            <a v-else-if="type=='update'" href="#" class="myButton" v-on:click="updatePage">Update</a>
            <p v-else><strong>Wrong mode: {{type}}! (create|update)</strong></p>
        </div>
        <div id="path">
            Path:
            <input v-model="path" type="text" class="css-input" placeholder="/" />
        </div>
    </div>
</template>

<script>
    import MarkdownEditor from '@voraciousdev/vue-markdown-editor'
    import {createPage, getPage, updatePage} from "@/scripts/contentLoader";

    export default {
        name: "PageEditor",
        props: {
           mode: String,
           page: String
        },
        components: {
            MarkdownEditor
        },
        data() {
            return {
                markdown: '**Create a page using markdown**',
                theme: 'dark',
                path: this.page,
                type: this.mode
            }
        },
        created: async function () {
          if(this.mode == 'update'){
              var temp = await getPage("/"+this.path);
              if(!temp){
                  console.log("Page not found!")
              }else{
                  this.markdown = temp.content;
                  this.path = temp.path;
              }
          }
        },
        methods: {
            sendPage: function() {
                createPage({"path": this.path,"content":this.markdown});
                this.$router.go(0)
            },
            updatePage: function () {
                updatePage({"path": this.path,"content":this.markdown});
                this.$router.go(0)
            }
        }
    }
</script>

<style scoped>

    .PageEditor {
        padding-bottom: 0.75%;
    }

    #editor {
        background: #2F343D;
        border-radius: 20px;
        margin: 5% 15% 1% 15%;
        text-align: left;
        padding: 1% 1% 0% 1%;
    }

    #path {
        float: left;
        padding-left: 15%;
        padding-top: 1%;
        padding-bottom: 0%;
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
        padding:16px 31px;
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

    #submit {
        float: right;
        padding-right: 15%;
        padding-top: 1%;
        padding-bottom: 5px;

    }

</style>
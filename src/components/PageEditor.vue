<template>
    <div class="PageEditor">
        <div id="editor">
            <MarkdownEditor v-model="markdown" :theme="theme"/>
        </div>
        <div id="submit">
            <a href="#" class="myButton" v-on:click="sendPage">Create</a>
        </div>
        <div id="path">
            Path:
            <input v-model="path" type="text" class="css-input" placeholder="/" />
        </div>
    </div>
</template>

<script>
    import MarkdownEditor from '@voraciousdev/vue-markdown-editor'
    import {createPage} from "@/scripts/contentLoader";

    export default {
        name: "PageEditor",
        components: {
            MarkdownEditor
        },
        data() {
            return {
                markdown: '**Create a page using markdown**',
                theme: 'dark',
                path: ""
            }
        },
        methods: {
            sendPage: function() {
                createPage({"path": this.path,"content":this.markdown})
            }
        }
    }
</script>

<style scoped>
    #editor {
        background: #2F343D;
        border-radius: 20px;
        margin-top: 5%;
        margin-left: 10%;
        margin-right: 10%;
        text-align: left;
        padding: 1% 1% 0% 1%;
    }

    #path {
        float: left;
        padding-left: 10%;
        padding-top: 1%;
        padding-bottom: 1%;
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
        padding-right: 10%;
        padding-top: 1%;
        padding-bottom: 1%;
    }

</style>
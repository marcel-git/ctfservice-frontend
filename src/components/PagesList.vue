<template>
    <div class="page">
        <h1>Pages</h1>
        <div>
            <div v-for="page in pages" :key="page.path">
                <div class = "entry">
                    <div class="Title">{{page.path}}</div>
                    <div class="URL">/{{page.path}}</div>
                    <div class="Icons">
                        <a v-on:click="deletePage('/'+page.path)" href="" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg></a>
                        <router-link :to="'/'+page.path"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg></a></router-link>
                        <a v-on:click="editPage(page.path)"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg></a>
                    </div>
                </div>
                <div class="editor" v-if="path==page.path">
                    <div v-if="mode=='update'">
                        <PageEditor mode="update" :page="page.path"></PageEditor>
                    </div>

                </div>
            </div>
            <div class="create">
                <router-link class="myButton" to="/admin/createPage">Create</router-link>
            </div>
        </div>

    </div>
</template>

<script>
    //TODO you cant use the navbar to return to the pages overview
    import {getPage, deletePage} from "@/scripts/contentLoader";
    import PageEditor from "@/components/PageEditor";
    export default {
        name: "Pages",
        components: {PageEditor},
        data (){
            return {
                mode: "",
                path: "",
                pages: null
            }
         },
        created: async function () {
            this.pages = await getPage("/");
        },
        methods: {
            deletePage: async function (path) {
                deletePage(path)
            },
            editPage: function (path) {
                this.mode='update';
                if(this.path==path){
                    this.path=""
                }else{
                    this.path = path
                }

            },
            createPage: function () {
                this.mode = 'create'
            }
        }
    }
</script>

<style scoped>

    .editor {
        margin-bottom: 5%;
        margin-top: -3%;
    }

    h1 {
        text-align: center;
    }

    svg {
        padding-left: 10%;
    }

    a {
        color: #2F343D;
    }

    .Title {grid-area: Title;}
    .URL {
        grid-area: URL;
        padding-left: 5%;
        border-left: 1px solid azure;
        border-right: 1px solid azure;
    }
    .Icons {grid-area: Icons;}

    .entry {
        background: #42b983;
        border-radius: 25px;
        margin: 1% 15% 1% 15%;
        padding: 1% 1% 0.7% 1%;
        color: #373d48;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas:
                "Title URL URL Icons";
    }

    .create {
        margin: 0% 15% 0% 15%;
        padding: 1% 1% 0.7% 1%;
        float: right;
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
</style>
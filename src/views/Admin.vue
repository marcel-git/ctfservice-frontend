<template>
    <div class="admin">
        <div v-if="showAdmin">
            <router-view ></router-view>
        </div>
        <div v-else>
            <h1><strong>Forbidden!</strong></h1>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Admin.vue",
        computed: {
            currentUser(){
                return this.$store.state.auth.user;
            },
            showAdmin() {
                if(this.currentUser)
                {
                    return this.currentUser.admin;
                }
                return false;
            },
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>
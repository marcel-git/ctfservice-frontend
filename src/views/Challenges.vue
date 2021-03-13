<template>
    <div class="challenges">
        <div v-if="loggedIn">
            <h1>This is a challenges page</h1>
        </div>
        <div v-else>
            <h1><strong>You must be logged in to view this page!</strong></h1>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Admin.vue",
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>
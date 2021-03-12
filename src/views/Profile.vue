<template>
    <div class="profile">
        <h1>This is a profile page</h1>
      <strong>{{currentUser.id}}</strong>
      <br>
        <strong>{{currentUser.username}}</strong>
      <br>
        <strong>{{currentUser.email}}</strong>
      <br>
        <strong>{{currentUser.admin}}</strong>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        computed: {
          currentUser() {
            return this.$store.state.auth.user;
          }
        }
    }
</script>

<style scoped>

</style>
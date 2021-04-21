<template>
    <div class="challenges">
        <div v-if="loggedIn">
            <div v-for="challenge in challenges" :key="challenge.id">
                <ChallengeModal :challenge="{id: challenge.id, name: challenge.name, text: challenge.text, points: challenge.points }"/>
            </div>
        </div>
        <div v-else>
            <h1><strong>You must be logged in to view this page!</strong></h1>
        </div>

    </div>
</template>

<script>
    import {getChallenges} from "@/scripts/challenge.service";
    import ChallengeModal from "@/components/ChallengeModal"

    export default {
        name: "Admin.vue",
        components: {ChallengeModal},
        data() {
          return {
              challenges: []
          }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        created: async function(){
            var temp = await getChallenges();
            this.challenges = temp;

        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }

    .challenges{
        margin: 1% 10% 1% 7%;
    }

</style>
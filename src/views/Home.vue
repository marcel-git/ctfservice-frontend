<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <News msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import News from '@/components/News.vue'

export default {
  name: 'Home',
  components: {
    News
  }
}
</script>

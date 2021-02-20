<template>
  <div class="home">
    <Content/>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from "@/components/Content";

export default {
  name: 'Home',
  components: {
    Content,
  }
}
</script>

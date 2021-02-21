<template>
  <div class="home">
    <MarkdownComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
//import Content from "@/components/Content";
import MarkdownComponent from "@/components/MarkdownComponent";

export default {
  name: 'Home',
  components: {
    MarkdownComponent,
  }
}
</script>
